<template>
  <div class="flex flex-col items-center">
    <p class="text-4xl text-center m-10">
      TODO available cars list
    </p>
    <router-link
      class="bg-red-200 p-5 cursor-pointer"
      to="/available-cars/1"
    >
      Go to /available-cars/1
    </router-link>
  </div>
</template>

<script>
export default {
name: "AvailableCars"
}
</script>

<style scoped>

</style>
