<template>
  <div class="animated fadeIn">
    <div class="row">


        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-primary">
            <div class="card-body pb-0">
              <div class="btn-group float-right">
                <button type="button" class="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="icon-settings"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <h4 class="mb-0">9.823</h4>
              <p>Members online</p>
            </div>
            <div class="chart-wrapper px-3" style="height:70px;"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
              <canvas id="card-chart1" class="chart chart-line chartjs-render-monitor" height="70" width="343" style="display: block; width: 343px; height: 70px;"></canvas>
            </div>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-info">
            <div class="card-body pb-0">
              <button type="button" class="btn btn-transparent p-0 float-right">
                <i class="icon-location-pin"></i>
              </button>
              <h4 class="mb-0">9.823</h4>
              <p>Members online</p>
            </div>
            <div class="chart-wrapper px-3" style="height:70px;"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
              <canvas id="card-chart2" class="chart chart-line chartjs-render-monitor" height="70" width="343" style="display: block; width: 343px; height: 70px;"></canvas>
            </div>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-warning">
            <div class="card-body pb-0">
              <div class="btn-group float-right">
                <button type="button" class="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="icon-settings"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <h4 class="mb-0">9.823</h4>
              <p>Members online</p>
            </div>
            <div class="chart-wrapper">
              <div class="chart-wrapper" style="height:70px;"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas id="card-chart3" class="chart chart-line chartjs-render-monitor" height="70" width="375" style="display: block; width: 375px; height: 70px;"></canvas>
              </div>
            </div>
          </div>
        </div>
        <!--/.col-->

        <div class="col-sm-6 col-lg-3">
          <div class="card text-white bg-danger">
            <div class="card-body pb-0">
              <div class="btn-group float-right">
                <button type="button" class="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="icon-settings"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <h4 class="mb-0">9.823</h4>
              <p>Members online</p>
            </div>
            <div class="chart-wrapper px-3" style="height:70px;"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
              <canvas id="card-chart4" class="chart chart-bar chartjs-render-monitor" height="70" width="343" style="display: block; width: 343px; height: 70px;"></canvas>
            </div>
          </div>
        </div>
        <!--/.col-->


        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-primary">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-7 chart chart-line chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-8 chart chart-bar chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-7 p-0">
                  <div class="chart-wrapper">
                    <canvas class="chart-9 chart chart-bar float-right" height="44" width="130" style="margin-top: -7px; display: block;"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$189.783,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-danger">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-7-2 chart chart-line chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-8-2 chart chart-bar chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-7 p-0">
                  <div class="chart-wrapper">
                    <canvas class="chart-9-2 chart chart-bar float-right" height="44" width="130" style="margin-top: -7px; display: block;"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$189.783,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-success">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-7-3 chart chart-line chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-8-3 chart chart-bar chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-7 p-0">
                  <div class="chart-wrapper">
                    <canvas class="chart-9-3 chart chart-bar float-right" height="44" width="130" style="margin-top: -7px; display: block;"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$189.783,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-header text-white bg-warning">
              <div class="font-weight-bold">
                <span>SALE</span>
                <span class="float-right">$1.890,65</span>
              </div>
              <div>
                <span>
                  <small>Today 6:43 AM</small>
                </span>
                <span class="float-right">
                  <small>+432,50 (15,78%)</small>
                </span>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-7-4 chart chart-line chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
              <div class="chart-wrapper" style="height:38px"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="chart-8-4 chart chart-bar chartjs-render-monitor" height="38" width="335" style="display: block; width: 335px; height: 38px;"></canvas>
              </div>
            </div>
            <div class="card-body py-3 px-4">
              <div class="row">
                <div class="col-5">
                  <strong>+$780,98</strong>
                  <br>
                  <span class="text-muted">
                    <small>Weekly change</small>
                  </span>
                </div>
                <div class="col-7 p-0">
                  <div class="chart-wrapper">
                    <canvas class="chart-9-4 chart chart-bar float-right" height="44" width="130" style="margin-top: -7px; display: block;"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body py-0 px-4 b-t-1">
              <div class="row">
                <div class="col-6 b-r-1 py-3">
                  <div class="font-weight-bold">9.127</div>
                  <div class="text-muted">
                    <small>Deals</small>
                  </div>
                </div>
                <div class="col-6 py-3 text-right">
                  <div class="font-weight-bold">$189.783,87</div>
                  <div class="text-muted">
                    <small>Total Income</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      <div class="col-sm-6 col-lg-3">
        <card>
          <div class="h4 m-0">89.9%</div>
          <div>Lorem ipsum...</div>
          <progress-bar class="line" ref="basicLine" type="line" :options="lineBasicOptions"></progress-bar>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <card>
          <div class="h4 m-0">12.124</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-xs my-3" variant="info" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <card>
          <div class="h4 m-0">$98.111,00</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-xs my-3" variant="warning" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <card>
          <div class="h4 m-0">2 TB</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-xs my-3" variant="danger" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
    </div><!--/.row-->


    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <card class="text-white bg-primary">
          <div class="h4 m-0">89.9%</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <card class="text-white bg-warning">
          <div class="h4 m-0">12.124</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <card class="text-white bg-danger">
          <div class="h4 m-0">$98.111,00</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <card class="text-white bg-info">
          <div class="h4 m-0">2 TB</div>
          <div>Lorem ipsum...</div>
          <b-progress class="progress-white progress-xs my-3" :value="25"/>
          <small class="text-muted">Lorem ipsum dolor sit amet enim.</small>
        </card>
      </div><!--/.col-->
    </div><!--/.row-->

    <div class="row">
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true" footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true" footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true" footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true" footer-class="px-3 py-2">
          <div class="card-body p-3 clearfix">
            <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 mt-2">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
          <div slot="footer">
            <a class="font-weight-bold font-xs btn-block text-muted" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
          </div>
        </card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-laptop bg-info p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-bell bg-danger p-4 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
      <div class="col-6 col-lg-3">
        <card :no-body="true">
          <div class="card-body p-0 clearfix">
            <i class="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left"></i>
            <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
            <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>
          </div>
        </card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <div class="social-box facebook">
          <i class="fa fa-facebook"></i>
          <ul>
            <li>
              <strong>89k</strong>
              <span>friends</span>
            </li>
            <li>
              <strong>459</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </div><!--/.col-->
      <div class="col-md-3 col-sm-6">
        <div class="social-box twitter">
          <i class="fa fa-twitter"></i>
          <ul>
            <li>
              <strong>973k</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>1.792</strong>
              <span>tweets</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </div><!--/.col-->
      <div class="col-md-3 col-sm-6">
        <div class="social-box linkedin">
          <i class="fa fa-linkedin"></i>
          <ul>
            <li>
              <strong>500+</strong>
              <span>contacts</span>
            </li>
            <li>
              <strong>292</strong>
              <span>feeds</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </div><!--/.col-->
      <div class="col-md-3 col-sm-6">
        <div class="social-box google-plus">
          <i class="fa fa-google-plus"></i>
          <ul>
            <li>
              <strong>894</strong>
              <span>followers</span>
            </li>
            <li>
              <strong>92</strong>
              <span>circles</span>
            </li>
          </ul>
        </div><!--/social-box-->
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="card-group">
      <card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-people"></i>
        </div>
        <div class="h4 mb-0">87.500</div>
        <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="info" :value="25"/>
      </card>
      <card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-user-follow"></i>
        </div>
        <div class="h4 mb-0">385</div>
        <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="success" :value="25"/>
      </card>
      <card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-basket-loaded"></i>
        </div>
        <div class="h4 mb-0">1238</div>
        <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="warning" :value="25"/>
      </card>
      <card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-pie-chart"></i>
        </div>
        <div class="h4 mb-0">28%</div>
        <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
        <b-progress class="progress-xs mt-3 mb-0" :value="25"/>
      </card>
      <card>
        <div class="h1 text-muted text-right mb-4">
          <i class="icon-speedometer"></i>
        </div>
        <div class="h4 mb-0">5:34:11</div>
        <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
        <b-progress class="progress-xs mt-3 mb-0" variant="danger" :value="25"/>
      </card>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-2">
        <card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"></i>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="info" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="success" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="warning" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
          <b-progress class="progress-xs mt-3 mb-0" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
          <b-progress class="progress-xs mt-3 mb-0" variant="danger" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"></i>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold">Comments</small>
          <b-progress class="progress-xs mt-3 mb-0"variant="info" :value="25"/>
        </card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-sm-6 col-md-2">
        <card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"></i>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card class="text-white bg-warning">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card class="text-white bg-primary">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card class="text-white bg-danger">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-2">
        <card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"></i>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold">Comments</small>
          <b-progress class="progress-white progress-xs mt-3" :value="25"/>
        </card>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
    import BootstrapProgressBar from './progressbar/BootstrapProgressBar.vue'
    import VueProgress from './progressbar/VueProgress.vue'

    export default {
      name: 'widgets',
      data () {
        return {
          msg: 'Widgets'
        }
      },
     components: {
        BootstrapProgressBar,
        VueProgressBar: VueProgress
     }

    }
</script>
