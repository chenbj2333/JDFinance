<template>
  <div>
    <layout-header></layout-header>
    <home-slider :sliderList="sliderList" :enters="enterList"></home-slider>
    <home-adver></home-adver>
    <home-novice :noviceList="noviceList"></home-novice>
    <home-product :productLsit="productLsit"></home-product>
    <home-secure :secureList="secureList"></home-secure>
    <home-life :lifeList="lifeList"></home-life>
    <home-custom :customList="customList"></home-custom>
    <layout-footer></layout-footer>
    <layout-navbar></layout-navbar>
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
import LayoutFooter from '../../common/layout/footer.vue'
import LayoutNavbar from '../../common/layout/navbar.vue'
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
    LayoutFooter,
    LayoutNavbar
  },
  data () {
    return {
      sliderList: [],
      enterList: [],
      noviceList: [],
      productLsit: [],
      secureList: [],
      lifeList: [],
      customList: []
    }
  },
  methods: {
    getSlider () {
      axios.get('api/home/header/slider').then((res) => {
        this.sliderList = res.data;
      }).catch((err) => {
        console.log(err);
      })
    },
    getEnter () {
      axios.get('api/home/header/enters').then((res) => {
        this.enterList = res.data;
      }).catch((err) => {
        console.log(err);
      })
    },
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
    },
    getLife () {
      axios.get('api/home/life').then((res) => {
        this.lifeList = res.data;
      }).catch((err) => {
        console.log(err);
      })
    },
    getCustom () {
      axios.get('api/home/custom').then((res) => {
        this.customList = res.data;
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.getSlider();
    this.getEnter();
    this.getNovice();
    this.getProduct();
    this.getSecure();
    this.getLife();
    this.getCustom();
  }
}
</script>

