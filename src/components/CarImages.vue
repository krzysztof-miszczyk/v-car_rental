<template>
  <div class="flex flex-col  items-center p-3">
    <img class="h-80 rounded-xl cursor-pointer shadow-2xl" :src="images[currentImageIndex]" alt="Car image" @click="nextImage()">
    <div class="flex mt-4 overflow-x-scroll">
      <img class="h-16 m-1 rounded-md cursor-pointer " v-for="(image, index) in images" :key="index" :src="image" alt="Car image miniature" @click="currentImageIndex = index">
    </div>
  </div>
</template>

<script>
export default {
  name: "CarImages",
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentImageIndex: 0
    }
  },
  methods: {
    nextImage () {
      if (this.currentImageIndex + 1 >= this.images.length)
        this.currentImageIndex = 0;
      else
        this.currentImageIndex++;
    }
  }
}
</script>

<style scoped>

</style>
