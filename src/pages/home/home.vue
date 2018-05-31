<template>
  <div>
    <layout-header></layout-header>
    <home-slider></home-slider>
    <home-adver></home-adver>
    <home-novice :noviceList="noviceList"></home-novice>
    <home-product :productLsit="productLsit"></home-product>
    <home-secure :secureList="secureList"></home-secure>
    <home-life></home-life>
    <home-custom></home-custom>
    <home-footer></home-footer>
  </div>
</template>

<script>
import LayoutHeader from '../../common/layout/header.vue'
import HomeSlider from './components/homeSlider.vue'
import HomeAdver from './components/homeAdver.vue'
import HomeNovice from './components/homeNovice.vue'
import HomeProduct from './components/homeProduct.vue'
import HomeSecure from './components/homeSecure.vue'
import HomeLife from './components/homeLife.vue'
import HomeCustom from './components/homeCustom.vue'
import HomeFooter from './components/homeFooter.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    LayoutHeader,
    HomeSlider,
    HomeNovice,
    HomeAdver,
    HomeProduct,
    HomeSecure,
    HomeLife,
    HomeCustom,
    HomeFooter
  },
  data () {
    return {
      noviceList: [],
      productLsit: [],
      secureList: []
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
    },
    getSecure () {
      axios.get('api/home/secure').then((res) => {
        this.secureList = res.data;
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.getNovice();
    this.getProduct();
    this.getSecure();
  }
}
</script>

