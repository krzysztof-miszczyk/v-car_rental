<template>
  <div>
    <canvas :id="chartId" />
  </div>
</template>

<script>
import {Chart, registerables} from "chart.js";
export default {
  name: "PieChart",
  props: {
    chartId: {
      type: String,
      default: 'chartId',
      required: true
    },
    dataset: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    Chart.register(...registerables)
  },
  mounted () {
    new Chart(this.chartId, {
      type: 'pie',
      data: this.dataset
    })
  }
}
</script>

<style scoped>
</style>