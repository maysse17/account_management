<template>
  <h3 :class="classList">
    <template v-if="wrapper && wrapper.element">
      <component v-bind:is="wrapper.element" v-bind="wrapper.attributes">
        {{name}}
      </component>
    </template>
    <template v-else>
      {{name}}
    </template>
  </h3>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      classes: {
        type: String,
        default: ''
      },
      wrapper: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      classList () {
        return [
          'menu-title',
          ...this.itemClasses
        ]
      },
      itemClasses () {
        return this.classes ? this.classes.split(' ') : ''
      }
    }
  }
</script>
