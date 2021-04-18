<template>

  <router-link
    to="/available-cars"
    class="max-w-screen-2xl p-4 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md absolute bottom-8 w-10/12 left-0 right-0 mx-auto focus:outline-none"
  >
    Przejdź do listy dostepnych samochodów →
  </router-link>
  <main class="flex flex-col">
    <div class="flex w-full h-80 p-4 justify-center items-center">
      <div class="m-5">
        <Chart :options="chartOptions" :chartdata="chartData1" />
      </div>
      <div class="m-5">
        <Chart :options="chartOptions" :chartdata="chartData1" />
      </div>
    </div>
    <p class="m-10 text-xl text-center">
      Tutaj pewnie jakies info o co w tej apce chodzi. Moze jakis fajny obrazek samochodu coś ala assets/car.svg
    </p>
  </main>
</template>

<script>

import Chart from "@/components/Chart";

export default {
  name: "Home",
  components: {
    Chart
  },
  data() {
    return {
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
  }
};
</script>

<style scoped>
  .text-width {
    width: 400px;
  }
</style>
