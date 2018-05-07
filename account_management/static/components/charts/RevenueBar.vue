<script>
import { Bar } from 'vue-chartjs'

// const datasets = [
//   {
//     label: 'My First dataset',
//     backgroundColor: 'rgba(255,255,255,.3)',
//     borderColor: 'transparent',
//     //data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
//     data: this.data
//   }
// ]

export default {
  extends: Bar,
  props: ['height', 'data', 'barcolor', 'bordercolor'],
  mounted () {
    this.renderChart({
      labels: ['US', 'GB', 'PL', 'DE', 'NL', 'CA', 'FR', 'RU', 'AU', 'BD', 'N/A'],
      //datasets: datasets
      datasets: [
                  {
                    label: 'My First dataset',
                    //backgroundColor: 'rgba(255,255,255,.3)',
                    backgroundColor: '#4dbd74',
                    //borderColor: 'transparent',
                   // borderColor: '#5dbd74',
                    //data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
                    data: [98, 50, 45, 40, 35, 30, 55, 20, 15, 60, 80]
                  }
                ]

    }, {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true,
          categoryPercentage: 1,
          barPercentage: 0.5,
          ticks: {
            fontSize: 15,
            fontColor: '#151b1e'
          }
        }],
        yAxes: [{
          display: false
        }]
      }
    })
  }
}
</script>
