<template>
  <router-link
    to="/available-cars"
    class="p-4 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md absolute bottom-8 w-10/12 left-0 right-0 mx-auto focus:outline-none"
  >
    Przejdź do listy dostępnych samochodów →
  </router-link>
  <main
    class="flex flex-col"
  >
    <div class="m-10 text-xl text-center mt-24">
      <p>Car Rental jest aplikacją w której możesz wynająć samochód na godziny.</p>
      <p>Przejdź do listy dostępnych samochodów i wybierz ten, który Ci odpowiada.</p>
    </div>
    <div
      class="flex w-full p-4 justify-center items-center"
      :style="{ marginTop: '65px'}"
    >
      <div class="m-10">
        <div
          :style="{width: '800px'}"
          class="chart-wrapper"
        >
          <BarChart
            v-if="barChartDataset.length"
            :chart-id="'barChart'"
            :dataset="barChartDataset"
          />
          <p class="w-full text-center mt-2">
            Liczba rezerwacji
          </p>
        </div>
      </div>
      <div class="m-5">
        <div :style="{width: '400px', height: '200px'}"
             class="chart-wrapper">
          <PieChart
            v-if="pieChartDataset"
            :chart-id="'pieChart'"
            :dataset="pieChartDataset"
          />
          <p class="w-full text-center mt-2">
            Flota wypożyczalni
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {
  getReservationsPerDay,
  getCarQuantityPerModel
} from "../shared/api";

import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

export default {
  name: "Home",
  components: {
    BarChart,
    PieChart
  },
  data() {
    return {
      barChartDataset: [],
      pieChartDataset: null,
      chartOptions: {
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart'
            }
          }
        }
      },
      chartData1:
      // TODO: fetch from api
          [65, 59, 80, 81, 56, 55, 40]
      ,
    }
  },
  async mounted() {
    const reservationsPerDay = await getReservationsPerDay()
    const carQuantityPerModel = await getCarQuantityPerModel()

    this.barChartDataset = [{
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1,
      data: reservationsPerDay.map(data => ({
        x: data.reservations_date,
        y: data.reservations,
      }))
    }]

    this.pieChartDataset = {
      datasets: [{
        backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
        data: carQuantityPerModel.map(value => value.cars_quantity),
      }],
      labels: carQuantityPerModel.map(value => value.car_model)
    }
  }
};
</script>

<style scoped>
.text-width {
  width: 400px;
}

.chart-wrapper {
  position: relative;
  margin: auto;
  height: 220px;
}
</style>
