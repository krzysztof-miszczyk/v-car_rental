<template>
  <div class="flex flex-col items-center w-full max-w-screen-xl">
    <p class="my-10"></p>
    <p class="font-bold text-2xl text-center">
      Lista rezerwacji {{ carName }}
    </p>
    <Reservations
      @delete-reservation="deleteReservation"
      :reservations="reservations"
    />
    <button
      class="my-3 p-2 bg-blue-900 hover:bg-blue-800 text-center rounded-3xl shadow-2xl text-white active:shadow-md w-5/12 left-0 right-0 mx-auto focus:outline-none"
    >
      Dodaj nową rezerwację
    </button>
    <router-link
      class="my-auto w-5/12 p-3 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md focus:outline-none"
      :to="`/available-cars/${carId}`"
    >
      Powrót
    </router-link>
    <router-link
      to="/available-cars"
      class="w-5/12 p-3 my-3 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md focus:outline-none"
    >
      Powrót do listy aut →
    </router-link>
  </div>
</template>

<script>
import Reservations from "@/components/Reservations";

export default {
  name: "AvailableCarReservations",
  components: {
    Reservations,
  },

  data() {
    return {
      reservations: [],
      carId: this.$route.params.id,
      carName: this.$route.params.carName,
    };
  },
  // async created() {
  //   this.reservations = await this.fetchReservations();
  //   }
  created() {
    //this.carData=this.$route.params.carData,
    this.reservations = [
      {
        id: 1,
        car_id: 4,
        customer_id: 46,
        start_date: "01/10/2020",
        end_date: "05/10/2020",
        value: 200,
      },
      {
        id: 2,
        car_id: 4,
        customer_id: 32,
        start_date: "10/10/2020",
        end_date: "20/10/2020",
        value: 500,
      },
      {
        id: 3,
        car_id: 4,
        customer_id: 12,
        start_date: "22/10/2020",
        end_date: "28/10/2020",
        value: 300,
      },
      {
        id: 4,
        car_id: 4,
        customer_id: 67,
        start_date: "02/11/2020",
        end_date: "11/11/2020",
        value: 450,
      },
      {
        id: 5,
        car_id: 4,
        customer_id: 76,
        start_date: "20/11/2020",
        end_date: "21/11/2020",
        value: 50,
      },
      {
        id: 6,
        car_id: 4,
        customer_id: 83,
        start_date: "22/11/2020",
        end_date: "30/11/2020",
        value: 400,
      },
    ];
  },
  methods: {
    deleteReservation(id) {
      if (confirm("Czy na pewno chcesz usunąć rezerwację?")) {
        this.reservations = this.reservations.filter(
          (reservation) => reservation.id !== id
        );
      }
    },
    async fetchReservations() {
      const res = await fetch(
        "https://my.api.mockaroo.com/car_reservations/123.json?key=f3d1e2f0"
      );
      const data = await res.json();
      return data;
    },
  },
};
</script>

<style scoped>
</style>
