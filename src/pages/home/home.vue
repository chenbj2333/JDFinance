<template>
  <div>
    <layout-header></layout-header>
    <home-slider></home-slider>
  </div>
</template>

<script>
import LayoutHeader from '../../common/layout/header.vue'
import HomeSlider from './components/homeSlider.vue'

export default {
  name: 'Home',
  components: {
    LayoutHeader,
    HomeSlider
  }
}
</script>

