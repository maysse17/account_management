<script>
import { Line } from 'vue-chartjs'

const brandPrimary = '#007bff'
const datasets = [
  {
    label: 'Dataset',
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: '2',
    data: [20, 10, 45, 30, 51, 61, 75, 82, 90]
  }
]

export default {
  extends: Line,
  props: ['height'],
  mounted () {
    this.renderChart({
      //labels: ['', '', '', '', '', '', '', '', ''],
      labels: ['Jan', 'Feb','March', 'April','May', 'June', 'July', 'Oct', 'Dec'],
      datasets: datasets
    }, {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      //type: 'line',

      scales: {
        xAxes: [{

          gridLines: {
            color: '#fff',
            zeroLineColor: '#fff'
          },
          ticks: {
            fontSize: 15,
            fontColor: '#fff'
          }
        }],
        yAxes: [{
          display: true,

          ticks: {
            display: true,
            fontColor: '#fff',
            min: Math.min.apply(Math, datasets[0].data) - 5,
            max: Math.max.apply(Math, datasets[0].data) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 2
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
