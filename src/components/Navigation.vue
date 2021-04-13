<template>
  <nav class="bg-gray-800 h-16 flex shadow-2xl">
    <router-link to="/" class="cursor-pointer select-none text-white m-auto text-center text-xl md:text-2xl font-thin uppercase letter-space focus:outline-none">
      car rental
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
  .letter-space {
    letter-spacing: 10px;
  }
</style>
