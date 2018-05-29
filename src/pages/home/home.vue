<template>
  <div>
    <layout-header></layout-header>
    <home-slider></home-slider>
    <home-novice></home-novice>
  </div>
</template>

<script>
import LayoutHeader from '../../common/layout/header.vue'
import HomeSlider from './components/homeSlider.vue'
import HomeNovice from './components/novice.vue'

export default {
  name: 'Home',
  components: {
    LayoutHeader,
    HomeSlider,
    HomeNovice
  }
}
</script>

