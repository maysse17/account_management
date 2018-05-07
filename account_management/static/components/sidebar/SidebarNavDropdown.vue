<template>
  <li class="menu-item-has-children" :to="url" @click="handleClick">
    <a href="#" > <i class="menu-icon" :class="icon"></i><span class="menu-title-text">{{name}}</span></a>
    <ul class="sub-menu children">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>
