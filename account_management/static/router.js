import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'

// Dynamic Loading Modules

// Views
const Dashboard = resolve => { require.ensure(['./layouts/Dashboard.vue'], ()=>{ resolve(require('./layouts/Dashboard.vue')); }); };

// UI Components
const Buttons = resolve => { require.ensure(['./components/Buttons.vue'], ()=>{ resolve(require('./components/Buttons.vue')); }); };
const Badges = resolve => { require.ensure(['./components/Badges.vue'], ()=>{ resolve(require('./components/Badges.vue')); }); };
const Cards = resolve => { require.ensure(['./components/Cards.vue'], ()=>{ resolvAdvancedFormse(require('./components/Cards.vue')); }); };
const Alerts = resolve => { require.ensure(['./components/Alerts.vue'], ()=>{ resolve(require('./components/Alerts.vue')); }); };

const BasicForms = resolve => { require.ensure(['./components/forms/BasicForms.vue'], ()=>{ resolve(require('./components/forms/BasicForms.vue')); }); };
const Grids = resolve => { require.ensure(['./components/Grids.vue'], ()=>{ resolve(require('./components/Grids.vue')); }); };
const Widgets = resolve => { require.ensure(['./components/Widgets.vue'], ()=>{ resolve(require('./components/Widgets.vue')); }); };
const Tables = resolve => { require.ensure(['./components/tables/Tables.vue'], ()=>{ resolve(require('./components/tables/Tables.vue')); }); };

//Charts
const BarChart = resolve => { require.ensure(['./components/charts/chartlists/BarChart.vue'], ()=>{ resolve(require('./components/charts/chartlists/BarChart.vue')); }); };
const LineChart = resolve => { require.ensure(['./components/charts/chartlists/LineChart.vue'], ()=>{ resolve(require('./components/charts/chartlists/LineChart.vue')); }); };
const Doughnut = resolve => { require.ensure(['./components/charts/chartlists/Doughnut.vue'], ()=>{ resolve(require('./components/charts/chartlists/Doughnut.vue')); }); };
const Radar = resolve => { require.ensure(['./components/charts/chartlists/Radar.vue'], ()=>{ resolve(require('./components/charts/chartlists/Radar.vue')); }); };
const Pie = resolve => { require.ensure(['./components/charts/chartlists/Pie.vue'], ()=>{ resolve(require('./components/charts/chartlists/Pie.vue')); }); };
const PolarArea = resolve => { require.ensure(['./components/charts/chartlists/PolarArea.vue'], ()=>{ resolve(require('./components/charts/chartlists/PolarArea.vue')); }); };

//Maps
const GoogleMapsPage = resolve => { require.ensure(['./components/maps/google-maps/GoogleMapsPage.vue'], ()=>{ resolve(require('./components/maps/google-maps/GoogleMapsPage.vue')); }); };
const LeafletMapsPage = resolve => { require.ensure(['./components/maps/leaflet-maps/LeafletMapsPage.vue'], ()=>{ resolve(require('./components/maps/leaflet-maps/LeafletMapsPage.vue')); }); };
const BubbleMapsPage = resolve => { require.ensure(['./components/maps/bubble-maps/BubbleMapsPage.vue'], ()=>{ resolve(require('./components/maps/bubble-maps/BubbleMapsPage.vue')); }); };
const LineMapsPage = resolve => { require.ensure(['./components/maps/line-maps/LineMapsPage.vue'], ()=>{ resolve(require('./components/maps/line-maps/LineMapsPage.vue')); }); };

// User Info
const User = resolve => { require.ensure(['./layouts/User.vue'], ()=>{ resolve(require('./layouts/User.vue')); }); };

//Pages
const Login = resolve => { require.ensure(['./pages/login/Login.vue'], ()=>{ resolve(require('./pages/login/Login.vue')); }); };
const Register = resolve => { require.ensure(['./pages/register/Register.vue'], ()=>{ resolve(require('./pages/register/Register.vue')); }); };
const Page404 = resolve => { require.ensure(['./pages/Page404.vue'], ()=>{ resolve(require('./pages/Page404.vue')); }); };
const Page500 = resolve => { require.ensure(['./pages/Page500.vue'], ()=>{ resolve(require('./pages/Page500.vue')); }); };

export const routes = [
    {
        path : '',
        name: 'home',
        components:{
            default: Dashboard
        }
    },
    {   path : '/dashboard',
        component: { render (c) { return c('router-view') }},
        children:[{
                path:"",
                component: Dashboard
            }]
    },

    // UI Components
    { path : '/components/buttons', name: 'buttons', component: Buttons },
    { path : '/components/badges', name: 'badges', component: Badges },
    { path : '/components/cards', name: 'cards', component: Cards },
    { path : '/components/alerts', name: 'alerts', component: Alerts },
    { path : '/components/basic-form', name: 'basic-form', component: BasicForms },
    { path : '/components/grids', name: 'grids', component: Grids },
    { path : '/components/widgets', name: 'widgets', component: Widgets },
    { path : '/components/tables', name: 'tables', component: Tables },
    {
        path : '/components/charts',
        name: 'Charts',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/charts/linechart',
                component: LineChart,
                name: 'line-chart'
            },
            {
                path: '/components/charts/barchart',
                component: BarChart,
                name: 'bar-chart'
            },
            {
                path: '/components/charts/doughnut',
                component: Doughnut,
                name: 'doughnut-chart'
            },
            {
                path: '/components/charts/radar',
                component: Radar,
                name: 'radar-chart'
            },
            {
                path: '/components/charts/piechart',
                component: Pie,
                name: 'pie-chart'
            },
            {
                path: '/components/charts/polar',
                component: PolarArea,
                name: 'polar-chart'
            }
        ]
    },
    {
        path : '/components/maps',
        name: 'Maps',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/maps/google-maps',
                component: GoogleMapsPage,
                name: 'google-maps-page'
            },
            {
                path: '/components/maps/leaflet-maps',
                component: LeafletMapsPage,
                name: 'leaflet-maps-page'
            },
            {
                path: '/components/maps/bubble-maps',
                component: BubbleMapsPage,
                name: 'bubble-maps-page'
            },
            {
                path: '/components/maps/line-maps',
                component: LineMapsPage,
                name: 'line-maps-page'
            },

        ]
    },


    {
        path : '/components/auth',
        name: 'auth',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/auth/login',
                component: Login,
                name: 'login',
                meta: {
                    default: false,
                    title: 'Login'
                }
            },
            {
                path: '/auth/register',
                component: Register,
                name: 'Register'
            },
            {
                path: '/auth/Page404',
                component: Page404,
                name: 'Page404'
            },
            {
                path: '/auth/Page500',
                component: Page500,
                name: 'Page500'
            }

        ]
    },

    // Redirect to Home
    { path: '/redirect-me', redirect: { name: 'home' } },

    // 404 redirect to home
    { path: '*', redirect: { name: 'Page404', component: Page404 }  }
];

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

export default router
