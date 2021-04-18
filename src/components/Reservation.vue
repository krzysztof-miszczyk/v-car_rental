<template>
    <h3>{{ reservation.start_date }}</h3>
</template>

<script>

export default {
   name: 'Reservation',
   props: {
       reservation: Object,
   },
}
</script>
