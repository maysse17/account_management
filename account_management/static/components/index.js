import Vue from 'vue'

// Components
import Alert from './Alert.vue'
import Alerts from './Alerts.vue'
import Buttons from './Buttons.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Badges from './Badges.vue'
import Cards from './Cards.vue'
import CardTemplate from './widgets/CardTemplate.vue'
import BasicForms from './forms/BasicForms.vue'
import Grids from './Grids.vue'
import Widgets from './Widgets.vue'
import Tables from './tables/Tables.vue'
import Icons from './icons/Icons.vue'
import AnimatedNumber from './AnimatedNumber.vue'

//Maps
import GoogleMapsPage from './maps/google-maps/GoogleMapsPage.vue'
import LeafletMapsPage from './maps/leaflet-maps/LeafletMapsPage.vue'
import BubbleMapsPage from './maps/bubble-maps/BubbleMapsPage.vue'
import LineMapsPage from './maps/line-maps/LineMapsPage.vue'

//Importing Custom Components
import SidebarCollapse from '../layouts/SidebarCollapse.vue';

// Pages
import Login from '../pages/login/Login.vue';
import Register from '../pages/register/Register.vue';
import Page404 from '../pages/Page404.vue';
import Page500 from '../pages/Page500.vue';

// Registered Components
Vue.component('sidebar-collapse', SidebarCollapse)
Vue.component('card', CardTemplate)
Vue.component('basix-counter', AnimatedNumber)

export {
  Alert,
  Alerts,
  Buttons,
  Footer,
  Header,
  Sidebar,
  SidebarCollapse,
  Badges,
  Cards,
  CardTemplate,
  BasicForms,
  Grids,
  Widgets,
  Tables,
  Icons,
  GoogleMapsPage,
  LeafletMapsPage,
  BubbleMapsPage,
  LineMapsPage,
  AnimatedNumber,
  Login,
  Register,
  Page404,
  Page500,
}
