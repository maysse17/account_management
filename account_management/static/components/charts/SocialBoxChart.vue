<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'height', 'bgcolor', 'bordercolor'],
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          backgroundColor: this.bgcolor,
          borderColor: this.bordercolor,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    })
  }
}
</script>
