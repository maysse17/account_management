<template>
    <div class="col-md-12">
        <div class="row">

            <div class="col-sm-6 col-lg-3">
                <div class="social-box facebook">
                    <i class="fa fa-facebook"></i>
                    <social-box-chart
                        class="chart-wrapper"
                        style="height:90px;"
                        bordercolor="#fff"
                        bgcolor="rgba(255,255,255,.15)"
                        :data="[65,59,84,84, 50, 55, 40]"
                        height="90"
                    />
                    <ul>
                        <li>
                            <strong>
                            <basix-counter
                              :from=0
                              :to=99
                              :duration="4000"
                            ></basix-counter>k</strong>
                            <span>friends</span>
                        </li>
                        <li>
                            <strong>478</strong>
                            <span>feeds</span>
                        </li>
                    </ul>
                </div>
                <!--/.social-box-->
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="social-box twitter">
                    <i class="fa fa-twitter"></i>
                    <social-box-chart
                        class="chart-wrapper"
                        style="height:90px;"
                        bordercolor="#fff"
                        bgcolor="rgba(255,255,255,.15)"
                        :data="[1,13,9,17, 34, 41, 38]"
                        height="90"
                    />
                    <ul>
                        <li>
                            <strong>
                            <basix-counter
                              :from=0
                              :to=99
                              :duration="4000"
                            ></basix-counter>k</strong>
                            <span>friends</span>
                        </li>
                        <li>
                            <strong>478</strong>
                            <span>feeds</span>
                        </li>
                    </ul>
                </div>
                <!--/.social-box-->
            </div>


            <div class="col-sm-6 col-lg-3">
                <div class="social-box linkedin">
                    <i class="fa fa-linkedin"></i>
                    <social-box-chart
                        class="chart-wrapper"
                        style="height:90px;"
                        bordercolor="#fff"
                        bgcolor="rgba(255,255,255,.15)"
                        :data="[79,81,80,45, 34, 12, 40]"
                        height="90"
                    />
                    <ul>
                        <li>
                            <strong>
                            <basix-counter
                              :from=0
                              :to=99
                              :duration="4000"
                            ></basix-counter>k</strong>
                            <span>friends</span>
                        </li>
                        <li>
                            <strong>478</strong>
                            <span>feeds</span>
                        </li>
                    </ul>
                </div>
                <!--/.social-box-->
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="social-box google-plus">
                    <i class="fa fa-google-plus"></i>
                    <social-box-chart
                        class="chart-wrapper"
                        style="height:90px;"
                        bordercolor="#fff"
                        bgcolor="rgba(255,255,255,.15)"
                        :data="[35,23,56,22, 97, 23, 64]"
                        height="90"
                    />
                    <ul>
                        <li>
                            <strong>
                            <basix-counter
                              :from=0
                              :to=99
                              :duration="4000"
                            ></basix-counter>k</strong>
                            <span>friends</span>
                        </li>
                        <li>
                            <strong>478</strong>
                            <span>feeds</span>
                        </li>
                    </ul>
                </div>
                <!--/.social-box-->
            </div>

        </div>
    </div>
</template>

<script>
    import SocialBoxChart from '../components/charts/SocialBoxChart.vue'
    export default{
        name: 'socials',
        components:{
            SocialBoxChart
        }
    }
</script>

<style lang="scss">
.social-box {
    min-height: 160px;
    margin-bottom: 1.5rem;
    text-align: center;
    background: #fff;
    border: 1px solid #c2cfd6;

    ul li{
        strong{
            span{
                font-size: 20px;
                color: #333648;
                font-weight: bolder;
            }
        }
    }
    .chart-wrapper{
        height: 90px;
        margin: -90px 0 0;
    }
}

</style>