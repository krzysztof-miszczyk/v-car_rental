<template>
  <div class="bg-gray-200 h-screen">
    <Navigation></Navigation>
    <router-view />
  </div>
</template>


<script>

import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  }
}
</script>

<style>

</style>
