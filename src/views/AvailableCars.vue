<template>
  <div class="flex flex-col items-center w-full max-w-screen-2xl mx-auto">
    <p class="text-4xl text-center mx-auto mt-28">
      Wybierz samochód którym jesteś zainteresowany
    </p>
    <div class="w-full flex m-10 flex-wrap justify-center">
      <div class="hover:shadow-2xl flex flex-col m-5 bg-white rounded-lg p-10 pb-0 w-80 justify-self-center" v-for="car in carList" :key="car.id">
        <router-link class="cursor-pointer" :to="`/available-cars/${car.id}`">
          <img :src="car.image" alt="car image" class="h-32 rounded-lg">
        </router-link>
        <p class="text-center text-xl">
          {{car.name}}
        </p>
        <p class="mt-3">
          {{car.description}}
        </p>
        <router-link class="mx-auto p-3 px-6 m-3 text-center rounded-md" :to="`/available-cars/${car.id}`">
          →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvailableCars",
  data() {
    // TODO: fetch data from mockaroo
    return {
      carList: []
    }
  },
  async created() {
    await this.fetchCarList();
  },
  methods: {
    async fetchCarList() {
      const res = await fetch(
          `https://my.api.mockaroo.com/cars.json?key=962da010`
      );
      this.carList = await res.json();
    }
  },
}
</script>

<style scoped>

</style>
