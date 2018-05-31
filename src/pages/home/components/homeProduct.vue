<template lang="html">
  <Panel title="众筹新品" :class="$style.panel">
    <section :class="$style.content">
      <div class="arrow">更多尖货 ></div>
      <Slider :swiperOption="swiperOption" :items="productLsit" cname="product-slider"/>
    </section>
  </Panel>
</template>
<script>
import Slider from '../../../common/components/slider.vue';
import Panel from '../../../common/components/panel.vue';

export default {
  name: 'HomeProduct',
  components: {
    Slider,
    Panel
  },
  props: {
    productLsit: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true,
      }
    }
  }
}
</script>
<style lang="scss">
  .product-slider{
    .swiper-container{
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
          img{
            width: 100%;
            display: block;
            height: 314px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import './../../../assets/styles/element.scss';
  .panel{
    @include panel;
    h4 {
      font-weight: bold;
    }
    .content{
      padding-bottom: 40px;
      position: relative;
      & > div{
        position: absolute;
        font-size: 28px;
        color: #999;
        right:20px;
        top: -70px;
      }
    }
  }
</style>
