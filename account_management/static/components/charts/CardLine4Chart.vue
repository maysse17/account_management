<script>
import { Line } from 'vue-chartjs'

const brandPrimary = '#007bff'
const datasets = [
  {
    label: 'Dataset',
    backgroundColor: 'transparent',
    borderColor: '#007bff',
    borderWidth: '2',
    data: [20, 10, 45, 30, 51, 61, 75, 82, 90]
  }
]

export default {
  extends: Line,
  props: ['height'],
  mounted () {
    this.renderChart({
      labels: ['', '', '', '', '', '', '', '', ''],
      datasets: datasets
    }, {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, datasets[0].data) - 5,
            max: Math.max.apply(Math, datasets[0].data) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    })
  }
}
</script>
