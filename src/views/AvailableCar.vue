<template>
  <button @click="navigateToReservations()" class="fixed bottom-8 w-10/12 max-w-screen-2xl left-0 right-0 mx-auto w-full p-4 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md focus:outline-none">
    Sprawdź rezerwacje {{car.name}} →
  </button>
  <div class="flex flex-col items-center w-full max-w-screen-2xl mx-auto">
    <div class="mt-24">
      <p class="text-3xl text-center mb-5">
        {{car.name}}
      </p>
      <CarImages :images="car.images"/>
    </div>
    <div class="w-full max-w-3xl p-7 bg-white rounded-md mb-5">
      <p class="text-2xl mb-2">
        Opis
      </p>
      <p>
        {{car.description}}
      </p>
      <p class="text-2xl mt-6 mb-2">
        Parametry
      </p>
      <div class="flex flex-wrap">
        <div class="m-2 p-3 bg-gray-100 rounded-2xl cursor-pointer" v-for="(parameter, index) in car.parameters" :key="index">
          <span class="text-sm text-gray-400 mr-2">
            {{parameter.name}}
          </span>
          <span>
            {{parameter.value}}
          </span>
        </div>
      </div>
      <p class="text-2xl mt-6 mb-2">
        Warunki wypożyczenia
      </p>
      <div class="flex flex-wrap">
        <div class="m-2 p-3 bg-gray-100 rounded-2xl cursor-pointer" v-for="(loanCondition, index) in car.loanConditions" :key="index">
          <span class="text-sm text-gray-400 mr-2">
            {{loanCondition.name}}
          </span>
          <span>
            {{loanCondition.value}}
          </span>
        </div>
      </div>
    </div>
    <router-link :to="`/available-cars/`" class="w-full max-w-3xl mb-32 px-10 p-4 bg-white hover:bg-gray-100 text-center rounded-xl shadow-2xl active:shadow-md focus:outline-none">
      ← Powrót do listy
    </router-link>
  </div>
</template>

<script>
import CarImages from "@/components/CarImages";

export default {
  name: "AvailableCar",
  components: {
    CarImages
  },
  data() {
    return {
      car: { images: []}
    }
  },
  async created() {
    await this.fetchCar();
  },
  methods:{
    navigateToReservations() {
      const carObj = this.car;
      this.$router.push({ name:'AvailableCarReservations', params: {id: this.$route.params.id, carName: carObj.name}});
    },
    async fetchCar() {
      const res = await fetch(
          `https://my.api.mockaroo.com/cars/${this.$route.params.id}.json?key=962da010`
      );
      this.car = await res.json();
    }
  }
}
</script>

<style scoped>

</style>
