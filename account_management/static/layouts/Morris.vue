<template>
    <div>
        <donut-chart
            id="donut"
            :data="donutData"
            colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
            resize="true">
        </donut-chart>

    </div>
</template>

<script>
    import jQuery from 'jquery';
    import Raphael from 'raphael/raphael'
    global.Raphael = Raphael

    import Vue from 'vue'
    import { DonutChart } from 'vue-morris'



    new Vue({
      el: '#app',

      data: {
            donutData: [
              { label: 'Red', value: 300 },
              { label: 'Blue', value: 50 },
              { label: 'Yellow', value: 100 }
            ],

            components: {
                DonutChart
            }
        }
    });
</script>