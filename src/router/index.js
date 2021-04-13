import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AvailableCars from "@/views/AvailableCars";
import AvailableCar from "@/views/AvailableCar";
import AvailableCarReservations from "@/views/AvailableCarReservations";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/available-cars",
    name: "AvailableCars",
    component: AvailableCars,
  },
  {
    path: "/available-cars/:id",
    name: "AvailableCar",
    component: AvailableCar,
  },
  {
    path: "/available-cars/:id/reservations",
    name: "AvailableCarReservations",
    component: AvailableCarReservations,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
