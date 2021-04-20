<template>
  <div class="flex flex-col items-center w-full">
    <p class="my-10"></p>

    <!-- Dynamiczna nazwa w oparciu o pole carName, które otrzymujemy jako property z routingu z komponentu nadrzędnego:
    carName: this.$route.params.carName -->
    <p class="font-bold text-2xl text-center">Lista rezerwacji {{ carName }}</p>

    <!-- Komponent listy rezerwacji. Po otrzymaniu zdarzenia delete-reservation uruchamia funkcję "deleteReservation" -->
    <Reservations
      @delete-reservation="deleteReservation"
      :reservations="reservations"
    />
    <!-- Przycisk po kliknięciu zmienia widoczność komponentu formularza nowej rezerwacji i zmienia swoją etykietę. -->
    <button
      @click="toggleAddForm()"
      class="mt-1 p-2 bg-blue-900 hover:bg-blue-800 text-center rounded-3xl shadow-2xl text-white active:shadow-md w-5/12 left-0 right-0 mx-auto focus:outline-none"
    >
      {{ buttonTxt }}
    </button>
    <!-- Komponent formularza nowej rezerwacji. Po otrzymaniu zdarzenia add-reservation uruchamia funkcję "addReservation" -->
    <div
      v-if="showAddReservation"
      class="flex flex-col items-center w-full max-w-screen-xl"
    >
      <AddReservation @add-reservation="addReservation" />
    </div>

    <!-- Nawigacja -->
    <router-link
      class="mt-10 w-5/12 p-3 bg-gray-600 hover:bg-gray-500 text-center rounded-3xl shadow-2xl text-white active:shadow-md focus:outline-none"
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
import AddReservation from "@/components/AddReservation";

export default {
  name: "AvailableCarReservations",
  components: {
    Reservations,
    AddReservation,
  },

  data() {
    return {
      reservations: [],
      carId: this.$route.params.id,
      carName: this.$route.params.carName,
      showAddReservation: false,
      buttonTxt: "Dodaj nową rezerwację",
    };
  },
  async created() {
    this.reservations = await this.fetchReservations();
  },
  methods: {
    async addReservation(newReservation) {
      newReservation.car_id = this.carId;
      const res = await fetch(
        `https://my.api.mockaroo.com/car_reservation.json`,
        {
          headers: {
            "X-API-Key": "f3d1e2f0",
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(newReservation),
        }
      );
      const data = await res.json();
      // Mockaroo zwraca losowy obiekt, więc dla sprawdzenia czy funkcja działa poprawnie loguję go do konsoli.
      console.log(data);
      // Rezerwację z danymi wprowadzonymi przez użytkownika dodaję lokalnie do tabeli rezerwacji.
      this.reservations = [...this.reservations, newReservation];
    },

    deleteReservation(id) {
      if (confirm("Czy na pewno chcesz usunąć rezerwację?")) {
        this.reservations = this.reservations.filter(
          (reservation) => reservation.id !== id
        );
      }
    },
    async fetchReservations() {
      const domain = "my.api.mockaroo.com";
      const headers = { "X-API-Key": "f3d1e2f0" };
      const id = this.carId;
      const res = await fetch(`https://${domain}/car_reservations/${id}.json`, {
        headers,
      });
      const data = await res.json();
      return data;
    },
    toggleAddForm() {
      this.showAddReservation = !this.showAddReservation;
      if (this.showAddReservation) {
        this.buttonTxt = "Anuluj";
      } else {
        this.buttonTxt = "Dodaj nową rezerwację";
      }
    },
  },
};
</script>

<style scoped>
</style>
