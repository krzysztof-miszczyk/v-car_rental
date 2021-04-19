<template>
  <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-300 text-gray-800">
    <tr class="text-left border-b-2 border-gray-400">
      <th class="px-4 py-3 text-xl">Nr rezerwacji</th>
      <th class="px-4 py-3 text-xl">Początek rezerwacji</th>
      <th class="px-4 py-3 text-xl">Koniec rezerwacji</th>
      <th></th>
    </tr>
      <tr class="bg-gray-100 border-b border-gray-200" :key="reservation.id" v-for="reservation in reservations">
        <td class="px-4 py-3">{{reservation.id}}</td>
        <td class="px-4 py-3">{{reservation.start_date}}</td>
        <td class="px-4 py-3">{{reservation.end_date}}</td>
        <td><i @click="onDelete(reservation.id)" class="fas fa-times fa-md"></i></td>
      </tr>
  </table>
</template>

<script>

export default {
    name: "Reservations",
    props: {
        reservations: Array
    },
    methods:{
      onDelete(id){
        this.$emit('delete-reservation', id)
      },
    },
    emits:['delete-reservation'],
}
</script>

<style scoped>
.fas{
  color:gray;
}
.fas:hover{
  color:red;
}
</style>
