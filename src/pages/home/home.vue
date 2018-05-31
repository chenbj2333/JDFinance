<template>
  <div>
    <layout-header></layout-header>
    <home-slider></home-slider>
    <home-adver></home-adver>
    <home-novice :homeNoviceData="homeNoviceData"></home-novice>
  </div>
</template>

<script>
import LayoutHeader from '../../common/layout/header.vue'
import HomeSlider from './components/homeSlider.vue'
import HomeAdver from './components/homeAdver.vue'
import HomeNovice from './components/novice.vue'
import HomeProduct from './components/homeProduct'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    LayoutHeader,
    HomeSlider,
    HomeNovice,
    HomeAdver,
    HomeProduct
  },
  data () {
    return {
      homeNoviceData: []
    }
  },
  methods: {
    getNovice () {
      axios.get('/api/home/novice')
      .then((response) => {
        this.homeNoviceData = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  mounted () {
    this.getNovice();
  }
}
</script>

