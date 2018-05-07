<template>
    <div class="traffic-sales-users">

        <div class="col-sm-12 col-lg-12">
            <div class="card-group mb-3 row">
                <div class="card text-white bg-flat-color-1" style="width:40%">
                    <div class="card-header font-weight-bold text-dark">Pageviews</div>
                    <div class="card-body py-3 pb-0">
                        <ul class="list-unstyled mb-0">
                            <li class="py-2">Overall
                                <span class="font-weight-bold float-right">987.123</span>
                            </li>
                            <li class="py-2">This week
                                <span class="font-weight-bold float-right">9.873</span>
                            </li>
                            <li class="py-2">Yestarday
                                <span class="font-weight-bold float-right">851</span>
                            </li>
                            <li class="py-2">Today
                                <span class="font-weight-bold float-right">184</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card pb-0 no-shadow">
                    <div class="card-header">May 15 - May 22</div>
                    <div class="card-body py-1">
                        <card-line4-chart class="chart-wrapper" style="height:200px;" height="200"/>
                    </div>
                </div>
            </div>
        </div>


        <card header-text="Traffic &amp Sales" class="no-header col-sm-12">

            <div class="row">
                <div class="col-sm-5">
                    <h3 class="card-title clearfix mb-0">Sales</h3>
                </div>
                <div class="col-sm-7">
                    <button type="button" class="btn btn-outline-primary float-right mt-1 ml-3"><i class="fa fa-cloud-download"></i> &nbsp; Download</button>
                    <fieldset class="form-group float-right">
                        <div class="input-group float-right" style="width:240px;">
                            <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                            <input name="daterange" class="form-control date-picker" type="text">
                        </div>
                    </fieldset>
                </div>
            </div>
            <hr class="m-0">


            <div class="row">
                <div class="col-sm-12 col-lg-4">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="callout callout-info">
                                <small class="text-muted">New Clients</small>
                                <br>
                                <strong class="h4">9,123</strong>
                                <callout-chart
                                    class="chart-wrapper"
                                    bordercolor="#20a8d8"
                                    :data="[35,23,56,22, 97, 23, 64]"
                                    height="22"
                                />
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6">
                            <div class="callout callout-danger">
                                <small class="text-muted">Recuring Clients</small>
                                <br>
                                <strong class="h4">22,643</strong>
                                <callout-chart
                                    class="chart-wrapper"
                                    style="mt-2"
                                    bordercolor="#f86c6b"
                                    :data="[78,81,80,22, 10, 5, 21]"
                                    height="22"
                                />
                            </div>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
                    <hr class="mt-0">
                    <ul class="horizontal-bars">
                        <li>
                            <div class="title">
                                Monday
                            </div>
                            <div class="bars">
                                <bootstrap-progress-bar type="info" :width="34" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                                <bootstrap-progress-bar type="danger" :width="78" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                Tuesday
                            </div>
                            <div class="bars">
                                <bootstrap-progress-bar type="info" :width="56" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                                <bootstrap-progress-bar type="danger" :width="94" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                Wednesday
                            </div>
                            <div class="bars">
                                <bootstrap-progress-bar type="info" :width="12" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                                <bootstrap-progress-bar type="danger" :width="67" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                Thursday
                            </div>
                            <div class="bars">
                                <bootstrap-progress-bar type="info" :width="43" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                                <bootstrap-progress-bar type="danger" :width="91" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                Friday
                            </div>
                            <div class="bars">
                                <bootstrap-progress-bar type="info" :width="22" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                                <bootstrap-progress-bar type="danger" :width="73" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                Saturday
                            </div>
                            <div class="bars">
                                <bootstrap-progress-bar type="info" :width="53" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                                <bootstrap-progress-bar type="danger" :width="80" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <div class="title">
                                Sunday
                            </div>
                            <div class="bars">
                                <bootstrap-progress-bar type="info" :width="9" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                                <bootstrap-progress-bar type="danger" :width="69" class="mt-0" style="height:5px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li class="legend">
                            <span class="badge badge-pill badge-info"></span>
                            <small>New clients</small> &nbsp;
                            <span class="badge badge-pill badge-danger"></span>
                            <small>Recurring clients</small>
                        </li>
                    </ul>
                </div>
                <!--/.col-->
                <div class="col-sm-12  col-lg-4 col-6">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="callout callout-warning">
                                <small class="text-muted">Pageviews</small>
                                <br>
                                <strong class="h4">78,623</strong>
                                <callout-chart
                                    class="chart-wrapper"
                                    bordercolor="#f8cb00"
                                    :data="[35,23,58,22,97, 23, 64]"
                                    height="22"
                                />
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6">
                            <div class="callout callout-success">
                                <small class="text-muted">Organic</small>
                                <br>
                                <strong class="h4">49,123</strong>
                                <callout-chart
                                    class="chart-wrapper"
                                    bordercolor="#4dbd74"
                                    :data="[78,81,80,45, 34, 12, 40]"
                                    height="22"
                                />
                            </div>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
                    <hr class="mt-0">
                    <ul class="horizontal-bars type-2">
                        <li>

                            <span class="title">Male</span>
                            <span class="value">43%</span>
                            <div class="bars">
                                <bootstrap-progress-bar type="warning" :width="43" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <span class="title">Female</span>
                            <span class="value">37%</span>
                            <div class="bars">
                                <bootstrap-progress-bar type="warning" :width="37" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <span class="title">Organic Search</span>
                            <span class="value">191,235
                                <span class="text-muted small">(56%)</span>
                            </span>
                            <div class="bars">
                                <bootstrap-progress-bar type="success" :width="56" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <span class="title">Facebook</span>
                            <span class="value">51,223
                                <span class="text-muted small">(15%)</span>
                            </span>
                            <div class="bars">
                                <bootstrap-progress-bar type="success" :width="15" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <span class="title">Twitter</span>
                            <span class="value">37,564
                                <span class="text-muted small">(11%)</span>
                            </span>
                            <div class="bars">
                                <bootstrap-progress-bar type="success" :width="11" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li>
                            <span class="title">LinkedIn</span>
                            <span class="value">27,319
                                <span class="text-muted small">(8%)</span>
                            </span>
                            <div class="bars">
                                <bootstrap-progress-bar type="success" :width="8" class="mt-0" style="height:3px;"></bootstrap-progress-bar>
                            </div>
                        </li>
                        <li class="divider text-center">
                            <button type="button" class="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="show more"><i class="icon-options"></i></button>
                        </li>
                    </ul>
                </div>
                <!--/.col-->
                <div class="col-6 col-sm-12 col-lg-4">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="callout">
                                <small class="text-muted">CTR</small>
                                <br>
                                <strong class="h4">23%</strong>
                                <callout-chart
                                    class="chart-wrapper"
                                    style
                                    bordercolor="#f86c6b"
                                    :data="[35,23,58,22,97, 23, 64]"
                                    height="22"
                                />
                            </div>
                        </div>
                        <!--/.col-->
                        <div class="col-sm-6">
                            <div class="callout callout-primary">
                                <small class="text-muted">Bounce Rate</small>
                                <br>
                                <strong class="h4">5%</strong>
                                <callout-chart
                                    class="chart-wrapper"
                                    style
                                    bordercolor="#63c2de"
                                    :data="[78,81,80,45,34, 12, 54]"
                                    height="22"
                                />
                            </div>
                        </div>
                        <!--/.col-->
                    </div>
                    <!--/.row-->
                    <hr class="mt-0">
                    <ul class="icons-list">
                        <li>
                            <i class="fa fa-desktop bg-primary text-light"></i>
                            <div class="desc">
                                <div class="title">iMac 4k</div>
                                <small>Lorem ipsum dolor sit amet</small>
                            </div>
                            <div class="value">
                                <div class="small text-muted">Sold this week</div>
                                <strong>1.924</strong>
                            </div>
                            <div class="actions">
                                <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-mobile bg-info text-light"></i>
                            <div class="desc">
                                <div class="title">Samsung Galaxy Edge</div>
                                <small>Lorem ipsum dolor sit amet</small>
                            </div>
                            <div class="value">
                                <div class="small text-muted">Sold this week</div>
                                <strong>1.224</strong>
                            </div>
                            <div class="actions">
                                <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-mobile bg-info text-light"></i>
                            <div class="desc">
                                <div class="title">iPhone 6S</div>
                                <small>Lorem ipsum dolor sit amet</small>
                            </div>
                            <div class="value">
                                <div class="small text-muted">Sold this week</div>
                                <strong>1.163</strong>
                            </div>
                            <div class="actions">
                                <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-user bg-danger text-light"></i>
                            <div class="desc">
                                <div class="title">Premium accounts</div>
                                <small>Lorem ipsum dolor sit amet</small>
                            </div>
                            <div class="value">
                                <div class="small text-muted">Sold this week</div>
                                <strong>928</strong>
                            </div>
                            <div class="actions">
                                <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-spotify bg-success text-light"></i>
                            <div class="desc">
                                <div class="title">Spotify Subscriptions</div>
                                <small>Lorem ipsum dolor sit amet</small>
                            </div>
                            <div class="value">
                                <div class="small text-muted">Sold this week</div>
                                <strong>893</strong>
                            </div>
                            <div class="actions">
                                <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-download bg-danger text-light"></i>
                            <div class="desc">
                                <div class="title">Ebook</div>
                                <small>Lorem ipsum dolor sit amet</small>
                            </div>
                            <div class="value">
                                <div class="small text-muted">Downloads</div>
                                <strong>121.924</strong>
                            </div>
                            <div class="actions">
                                <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                            </div>
                        </li>
                        <li>
                            <i class="fa fa-camera-retro bg-warning text-light"></i>
                            <div class="desc">
                                <div class="title">Photos</div>
                                <small>Lorem ipsum dolor sit amet</small>
                            </div>
                            <div class="value">
                                <div class="small text-muted">Uploaded</div>
                                <strong>12.125</strong>
                            </div>
                            <div class="actions">
                                <button type="button" class="btn btn-link text-muted"><i class="fa fa-cog"></i></button>
                            </div>
                        </li>
                        <li class="divider text-center">
                            <button type="button" class="btn btn-sm btn-link text-muted" data-toggle="tooltip" data-placement="top" title="show more"><i class="icon-options"></i></button>
                        </li>
                    </ul>
                </div>
                <!--/.col-->
            </div>

        </card>



    </div>
</template>

<script>
    import CalloutChart from '../components/charts/CalloutChart.vue'
    import CardLine4Chart from '../components/charts/CardLine4Chart.vue'
    import Gauges from '../components/charts/Gauges.vue'
    import BootstrapProgressBar from '../components/progressbar/BootstrapProgressBar.vue'
    export default{
        name: 'traffic-chart',
        components:{
            CalloutChart,
            CardLine4Chart,
            BasixGauge: Gauges,
            BootstrapProgressBar
        }
    }
</script>

<style lang="scss" scoped>
    .callout  {
        .chart-wrapper{
            position: absolute;
            top: 20px;
            left: 50%;
            float: right;
            width: 50%;
        }
    }


</style>