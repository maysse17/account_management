<template>
  <div class="sale-charts">

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-1">
            <div class="card-body pb-0">
              <div class="dropdown float-right" v-dropdown>
                <button class="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  <i class="fa fa-cog"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>
            <card-line1-chart class="chart-wrapper px-3" style="height:70px;" height="70"/>

          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-2">
            <div class="card-body pb-0">
              <button type="button" class="btn bg-transparent text-light p-0 float-right">
                <i class="fa fa-map-marker"></i>
              </button>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>
            <card-line2-chart class="chart-wrapper px-0" style="height:70px;" height="70"/>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-3">
            <div class="card-body pb-0">
              <div class="dropdown float-right" v-dropdown>
                <button class="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  <i class="fa fa-cog"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>
              <card-line3 class="chart-wrapper px-0" style="height:70px;" height="70"/>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-flat-color-4">
            <div class="card-body pb-0">
              <div class="dropdown float-right" v-dropdown>
                <button class="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  <i class="fa fa-cog"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div class="dropdown-menu-content">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h4 class="mb-0">
                  <basix-counter
                    :from=0
                    :to=10468
                    :duration="5000"
                  ></basix-counter>
              </h4>
              <p>Members online</p>
            </div>

             <card-bar-chart
                    class="chart-wrapper px-3"
                    style="height:70px;"
                    barbgcolor="rgba(255,255,255,.3)"
                    :data="[78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]"
                    height="70"
                    />
          </div>
        </div>
        <!--/.col-->


  </div><!-- /.sale-charts -->
</template>

<script>

import CardLine1Chart from '../components/charts/CardLine1Chart.vue'
import CardBarChart from '../components/charts/CardBarChart.vue'
import CardLine2Chart from '../components/charts/CardLine2Chart.vue'
import CardLine3 from '../components/charts/CardLine3.vue'

import AnimatedNumber from '../components/AnimatedNumber.vue'
import Dropdown from '../directives/Dropdown';

export default{
  name: 'info',
  components:{
    CardLine1Chart,
    CardBarChart,
    CardLine2Chart,
    CardLine3,
    Dropdown,
    BasixCounter: AnimatedNumber,
  },
  directives: {
    dropdown: Dropdown
  }
}
</script>

<style lang="scss">

</style>