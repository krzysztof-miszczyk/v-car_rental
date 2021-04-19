<template>
  <router-link
    to="/available-cars"
    class="p-4 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md absolute bottom-8 w-10/12 left-0 right-0 mx-auto focus:outline-none"
  >
    Przejdź do listy dostepnych samochodów →
  </router-link>
  <main class="flex flex-col">
    <div class="flex w-full h-80 p-4 justify-center items-center">
      <div class="m-10">
        <div :style="{width: '800px', height: '200px'}">
          <BarChart
            v-if="barChartDataset.length"
            :chart-id="'barChart'"
            :dataset="barChartDataset"
          />
        </div>
      </div>
      <div class="m-5">
        <div :style="{width: '800px', height: '100px'}">
          <PieChart
            v-if="pieChartDataset"
            :chart-id="'pieChart'"
            :dataset="pieChartDataset"
          />
        </div>
      </div>
    </div>
    <p class="m-10 text-xl text-center">
      Tutaj pewnie jakies info o co w tej apce chodzi. Moze jakis fajny obrazek samochodu coś ala assets/car.svg
    </p>
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
      // backgroundColor: ['#00ff00', '#000000'],
      data: reservationsPerDay.map(data => ({
        x: data.reservations_date,
        y: data.reservations,
      }))
    }]
    this.pieChartDataset = {
      datasets: [{
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
</style>