<template>
  <div>
    <canvas :id="chartId" />
  </div>
</template>

<script>
import {Chart, registerables} from "chart.js";

export default {
  name: "BarChart",
  props: {
    chartId: {
      type: String,
      default: 'chartId',
      required: true
    },
    dataset: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: { day: 'DD' }
            }
          }]
        },
        maintainAspectRatio: true,
        tooltips: { enabled: true },
        plugins: {
          legend: {display: false},
        },
        elements: { point: { radius: 0 } }
      })
    }
  },
  created() {
    Chart.register(...registerables)
  },
  mounted () {
    new Chart(this.chartId, {
      type: 'bar',
      data: {
        datasets: this.dataset
      },
      options: this.options
    })
  }
}
</script>

<style scoped>

</style>