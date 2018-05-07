export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-dashboard',
      badge: {
        variant:'success',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },

    {
      name: 'Components',
      url: '/components',
      icon: 'fa fa-puzzle-piece',
      children: [
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'fa fa-puzzle-piece',
          badge: {
            variant: 'danger',
            text: 'NEW'
          }
        },
        {
          name: 'Badges',
          url: '/components/badges',
          icon: 'fa fa-id-badge'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'fa fa-id-card-o'
        },
        {
          name: 'Alerts',
          url: '/components/alerts',
          icon: 'fa fa-exclamation-triangle'
        },
        {
          name: 'Grids',
          url: '/components/grids',
          icon: 'fa fa-th'
        }
      ]
    },
    {
      name: 'Tables',
      url: '/components/tables',
      icon: 'fa fa-table'
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'fa fa-pencil-square-o',
      children: [
            {
                name: 'Basic Form',
                url: '/components/basic-form',
                icon: 'fa fa-pencil-square-o',
                badge: {
                  variant: 'warning',
                  text: 'NEW'
                }
            }
      ]
    },
    {
      name: 'Widgets',
      url: '/components/widgets',
      icon: 'fa fa-calculator',
      badge: {
        variant: 'info',
        text: '60+'
      }
    },
    {
      name: 'Charts',
      url: '/components/charts',
      icon: 'fa fa-pie-chart',
      badge: {
        variant: 'info',
        text: 'NEW'
      },
      children: [
                  {
                    name: 'Line Chart',
                    url: '/components/charts/linechart',
                    icon: 'fa fa-line-chart'
                  },
                  {
                    name: 'Bar Chart',
                    url: '/components/charts/barchart',
                    icon: 'fa fa-bar-chart'
                  },
                  {
                    name: 'Doughnut Chart',
                    url: '/components/charts/doughnut',
                    icon: 'fa fa-pie-chart'
                  },
                  {
                    name: 'Radar Chart',
                    url: '/components/charts/radar',
                    icon: 'fa fa-pie-chart'
                  },
                  {
                    name: 'Pie Chart',
                    url: '/components/charts/piechart',
                    icon: 'fa fa-pie-chart'
                  },
                  {
                    name: 'Polar Area Chart',
                    url: '/components/charts/polar',
                    icon: 'fa fa-area-chart'
                  },
        ]
    },
    {
      name: 'Maps',
      url: '/components/maps/',
      icon: 'fa fa-map-marker',
      badge: {
        variant: 'info',
        text: 'NEW'
      },
      children: [
                  {
                    name: 'Google Maps',
                    url: '/components/maps/google-maps',
                    icon: 'fa fa-map-o'
                  },
                  {
                    name: 'Bubble Maps',
                    url: '/components/maps/bubble-maps',
                    icon: 'fa fa-globe'
                  },
                  {
                    name: 'Leaflet Maps',
                    url: '/components/maps/leaflet-maps',
                    icon: 'fa fa-street-view'
                  },
                  {
                    name: 'Line Maps',
                    url: '/components/maps/line-maps',
                    icon: 'fa fa-map-signs'
                  },
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/auth',
      icon: 'fa fa-paperclip',
      children: [
        {
          name: 'Login',
          url: '/auth/login',
          icon: 'fa fa-sign-in'
        },
        {
          name: 'Register',
          url: '/auth/register',
          icon: 'fa fa-sign-in'
        },
        {
          name: 'Error 404',
          url: '/auth/Page404',
          icon: 'fa fa-paper-plane'
        },
        {
          name: 'Error 500',
          url: '/auth/Page500',
          icon: 'fa fa-paper-plane'
        }
      ]
    },
    {
      name: 'Documentation',
      url: 'http://vuejsadmin.com/documentation/',
      icon: 'fa fa-file-text-o',
      variant: 'danger'
    },
    {
      name: 'Purchase',
      url: 'https://themeforest.net/item/basix-admin-vuejs-bootstrap-admin-dashboard-template/20838455?ref=litonice09',
      icon: 'fa fa-shopping-cart',
      class: 'mt-auto',
      variant: 'success'
    }

  ]
}
