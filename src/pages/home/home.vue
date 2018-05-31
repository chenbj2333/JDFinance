<template>
  <div>
    <layout-header></layout-header>
    <home-slider></home-slider>
    <home-adver></home-adver>
    <home-novice :noviceList="noviceList"></home-novice>
    <home-product :productLsit="productLsit"></home-product>
  </div>
</template>

<script>
import LayoutHeader from '../../common/layout/header.vue'
import HomeSlider from './components/homeSlider.vue'
import HomeAdver from './components/homeAdver.vue'
import HomeNovice from './components/homeNovice.vue'
import HomeProduct from './components/homeProduct.vue'
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
      noviceList: [],
      productLsit: []
    }
  },
  methods: {
    getNovice () {
      axios.get('/api/home/novice').then((res) => {
        this.noviceList = res.data;
      }).catch((error) => {
        console.log(error);
      });
    },
    getProduct () {
      axios.get('api/home/product').then((res) => {
        this.productLsit = res.data;
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.getNovice();
    this.getProduct();
  }
}
</script>

