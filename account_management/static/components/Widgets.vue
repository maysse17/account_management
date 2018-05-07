<template>
  <div class="animated fadeIn">
    <div class="row">


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

        <div class="col-sm-12">
            <div class="card ">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-5">
                      <h4 class="card-title mb-0">Traffic</h4>
                      <div class="small text-muted">October 2017</div>
                    </div>
                      <!--/.col-->
                      <div class="col-sm-7 hidden-sm-down">
                          <button type="button" class="btn btn-primary float-right bg-flat-color-1"><i class="fa fa-cloud-download"></i></button>
                          <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                              <label class="btn btn-outline-secondary">
                                <input type="radio" name="options" id="option1"> Day
                            </label>
                            <label class="btn btn-outline-secondary active">
                                <input type="radio" name="options" id="option2" checked=""> Month
                            </label>
                            <label class="btn btn-outline-secondary">
                                <input type="radio" name="options" id="option3"> Year
                            </label>
                        </div>
                    </div>
                </div><!--/.col-->
            </div><!--/.row-->
            <main-chart class="chart-wrapper mt-4" style="height:300px;" height="300"/>
            </div>
            <div class="card-footer">
                <ul>
                    <li>
                        <div class="text-muted">Visits</div>
                        <strong>29.703 Users (40%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 5px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li class="hidden-sm-down">
                        <div class="text-muted">Unique</div>
                        <strong>24.093 Users (20%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li>
                        <div class="text-muted">Pageviews</div>
                        <strong>78.706 Views (60%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 60%; height: 5px;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li class="hidden-sm-down">
                        <div class="text-muted">New Users</div>
                        <strong>22.123 Users (80%)</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 80%; height: 5px;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </li>
                    <li class="hidden-sm-down">
                        <div class="text-muted">Bounce Rate</div>
                        <strong>40.15%</strong>
                        <div class="progress progress-xs mt-2">
                            <div class="progress-bar" role="progressbar" style="width: 40%; height: 5px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-1 text-light">
                <div class="h4 m-0">89.9%</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-3 text-light">
                <div class="h4 m-0">12.124</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-4 text-light">
                <div class="h4 m-0">$98.111,00</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

        <div class="col-sm-6 col-lg-3">
            <card class="bg-flat-color-2 text-light">
                <div class="h4 m-0">2 TB</div>
                <div>Lorem ipsum...</div>
                <div class="progress-bar bg-light mt-2 mb-2" role="progressbar" style="width: 20%; height: 5px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <small class="text-light">Lorem ipsum dolor sit amet enim.</small>
            </card>
        </div><!--/.col-->

    </div><!--/.row-->


    <div class="row">
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>

                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                        <card-bar-chart
                            class="chart-wrapper px-0"
                            style="height:40px;"
                            barbgcolor="#20a8d8"
                            barbordercolor="red"
                            :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                            height="40"
                        />
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                      <card-bar-chart
                          class="chart-wrapper px-0"
                          style="height:40px;"
                          barbgcolor="#ffc107"
                          barbordercolor="red"
                          :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                          height="40"
                      />
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                      <card-bar-chart
                          class="chart-wrapper px-0"
                          style="height:40px;"
                          barbgcolor="#379457"
                          barbordercolor="red"
                          :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                          height="40"
                      />
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>
                      <social-box-chart
                          style="height:40px;"
                          bordercolor="#20a8d8"
                          bgcolor="transparent"
                          :data="[65, 59, 84, 84, 51, 55, 40]" height="90"
                      />

                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>

                      <social-box-chart
                          style="height:40px;"
                          bordercolor="#4dbd74"
                          bgcolor="transparent"
                          :data="[65, 59, 84, 84, 51, 55, 40]" height="90"
                      />

                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="text-muted small text-uppercase font-weight-bold">Title</div>
                      <div class="h2 py-3">
                          <basix-counter
                            :from=0
                            :to=1123
                            :duration="5000"
                          ></basix-counter>
                      </div>

                      <social-box-chart
                          style="height:40px;"
                          bordercolor="#f86c6b"
                          bgcolor="transparent"
                          :data="[65, 59, 84, 84, 51, 55, 40]" height="90"
                      />

                </div>
            </div>
        </div>
        <!--/.col-->
    </div>

    <div class="row">
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-laptop bg-info p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-moon-o bg-warning p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
        <div class="col-6 col-lg-3">
            <card>
                <div class="clearfix">
                    <i class="fa fa-bell bg-danger p-3 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 mt-1">$4.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
                <div class="b-b-1 pt-3"></div>
                <div class="more-info pt-2" style="margin-bottom:-10px;">
                    <a class="font-weight-bold font-xs btn-block text-muted small" href="#">View More <i class="fa fa-angle-right float-right font-lg"></i></a>
                </div>
            </card>
        </div><!--/.col-->
    </div><!--/.row-->


    <div class="row">
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-cogs bg-primary p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="card-body p-0 clearfix">
                    <i class="fa fa-laptop bg-info p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-moon-o bg-warning p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-bell bg-danger p-4 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-cogs bg-primary p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-primary mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-laptop bg-info p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-info mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-moon-o bg-warning p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-warning mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
        <div class="col-sm-6 col-lg-3">
            <div class="card">
                <div class="p-0 clearfix">
                    <i class="fa fa-bell bg-danger p-4 px-5 font-2xl mr-3 float-left text-light"></i>
                    <div class="h5 text-danger mb-0 pt-3">$1.999,50</div>
                    <div class="text-muted text-uppercase font-weight-bold font-xs small">Income</div>
                </div>
            </div>
        </div>
        <!--/.col-->
    </div>


    <div class="card-group">
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-users"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=87500
                    :duration="5000"
                    ></basix-counter>
                </div>

                <small class="text-muted text-uppercase font-weight-bold">Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-1" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-user-plus"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=385
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-muted text-uppercase font-weight-bold">New Clients</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-2" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-cart-plus"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=1238
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-muted text-uppercase font-weight-bold">Products sold</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-3" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-pie-chart"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=28
                    :duration="3000"
                    ></basix-counter>%
                </div>
                <small class="text-muted text-uppercase font-weight-bold">Returning Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-4" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-clock-o"></i>
                </div>
                <div class="h4 mb-0">5:34:11</div>
                <small class="text-muted text-uppercase font-weight-bold">Avg. Time</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-5" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-comments-o"></i>
                </div>
                <div class="h4 mb-0">
                  <basix-counter
                    :from=0
                    :to=972
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-muted text-uppercase font-weight-bold">COMMENTS</small>
                <div class="progress progress-xs mt-3 mb-0 bg-flat-color-1" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
    </div>

    <div class="card-group">
        <div class="card bg-flat-color-1">
            <div class="card-body">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-users text-light"></i>
                </div>

                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=87500
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-uppercase font-weight-bold text-light">Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-2">
                <div class="h1 text-muted text-right mb-4">
                    <i class="fa fa-user-plus text-light"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=385
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-uppercase font-weight-bold text-light">New Clients</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-3">
                <div class="h1 text-right mb-4">
                    <i class="fa fa-cart-plus text-light"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=1238
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-light text-uppercase font-weight-bold">Products sold</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-5">
                <div class="h1 text-right text-light mb-4">
                    <i class="fa fa-pie-chart"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=28
                    :duration="5000"
                    ></basix-counter>%
                </div>
                <small class="text-uppercase font-weight-bold text-light">Returning Visitors</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-4">
                <div class="h1 text-light text-right mb-4">
                    <i class="fa fa-clock-o"></i>
                </div>
                <div class="h4 mb-0 text-light">5:34:11</div>
                <small class="text-light text-uppercase font-weight-bold">Avg. Time</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
        <div class="card no-shadow">
            <div class="card-body bg-flat-color-1">
                <div class="h1 text-light text-right mb-4">
                    <i class="fa fa-comments-o"></i>
                </div>
                <div class="h4 mb-0 text-light">
                  <basix-counter
                    :from=0
                    :to=972
                    :duration="5000"
                    ></basix-counter>
                </div>
                <small class="text-light text-uppercase font-weight-bold">COMMENTS</small>
                <div class="progress progress-xs mt-3 mb-0 bg-light" style="width: 40%; height: 5px;"></div>
            </div>
        </div>
    </div>



    <div class="row">
        <div class="col-md-5">
            <div class="card-group mb-3">
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
            <div class="card">
                <div class="card-header text-white bg-flat-color-1">
                    <div class="font-weight-bold mb-3">Revenue</div>
                    <revenue class="chart-wrapper mb-3" style="height:200px;" height="200"/>
            </div>
            <div class="card-body">
            <revenue-bar
                    class="chart-wrapper px-0"
                    style="height:90px; width: 100%;"
                    barcolor="red"
                    :data="[0, 70, 20, 80, 15, 40, 0,39, 40, 20, 12, 11, 40, 20, 12, 11]"
                    height="70"
                    />
            </div>
          </div>
        </div>


        <div class="col-md-6">
          <div class="card">

            <div class="card-header">
              <i class="fa fa-compass icon-bg text-secondary pr-2"></i>Traffic

              <div class="card-actions">
                <a href="#" class="btn-setting text-secondary"><i class="fa fa-cog"></i></a>
                <a href="#" class="btn-minimize text-secondary"><i class="fa fa-arrow-up"></i></a>
                <a href="#" class="btn-close text-secondary"><i class="fa fa-times"></i></a>
              </div>
            </div>

            <div class="card-body">

              <div>Visits
                <span class="font-weight-bold float-right">(40% - 29.703 Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 7px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Unique
                <span class="font-weight-bold float-right">(20% - 24.093 Unique Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-info" role="progressbar" style="width: 20%; height: 7px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Pageviews
                <span class="font-weight-bold float-right">(60% - 78.706 Views)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 60%; height: 7px;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>New Users
                <span class="font-weight-bold float-right">(80% - 22.123 Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 80%; height: 7px;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Bounce Rate
                <span class="font-weight-bold float-right">(40.15%)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 7px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Visits
                <span class="font-weight-bold float-right">(40% - 29.703 Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-success" role="progressbar" style="width: 40%; height: 7px;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div>Unique
                <span class="font-weight-bold float-right">(20% - 24.093 Unique Users)</span>
              </div>
              <div class="progress progress-sm mt-2 mb-3">
                <div class="progress-bar bg-info" role="progressbar" style="width: 20%; height: 7px;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

            </div>
          </div>
        </div>

    </div>



</div>


  </div>
</template>

<script>
    import CardLine1Chart from './charts/CardLine1Chart.vue'
    import CalloutChart from './charts/CalloutChart.vue'
    import CardBarChart from './charts/CardBarChart.vue'
    import CardLine2Chart from './charts/CardLine2Chart.vue'
    import CardLine3 from './charts/CardLine3.vue'
    import MainChart from './charts/MainChart.vue'
    import SocialBoxChart from './charts/SocialBoxChart.vue'
    import CardLine4Chart from './charts/CardLine4Chart.vue'
    import Revenue from './charts/Revenue.vue'
    import RevenueBar from './charts/RevenueBar.vue'
    import AnimatedNumber from './AnimatedNumber.vue'
    import Dropdown from '../directives/Dropdown';

    export default {
      name: 'widgets',
      data () {
        return {
          msg: 'Widgets'
        }
      },
     components: {
            CardLine1Chart,
            CalloutChart,
            CardBarChart,
            CardLine2Chart,
            CardLine3,
            MainChart,
            SocialBoxChart,
            BasixCounter: AnimatedNumber,
            CardLine4Chart,
            Revenue,
            RevenueBar,
            Dropdown
         },
        directives: {
            dropdown: Dropdown
        }
    }
</script>

<style>
    .users{
        .table th, .table td{
            padding: .7rem 0;
        }
        .title{
            font-size: .8rem;
        }
        .small {
            font-size: 70%;
        }
    }
</style>