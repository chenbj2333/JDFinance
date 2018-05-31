<template lang="html">
  <Panel title="保险保障" :class="$style.panel">
    <section :class="$style.content">
      <Slider :swiperOption="swiperOption" :items="secureList" cname="secure-slider"/>
    </section>
  </Panel>
</template>
<script>
import Slider from '../../../common/components/slider.vue';
import Panel from '../../../common/components/panel.vue';

export default {
  name: 'HomeSecure',
  components: {
    Slider,
    Panel
  },
  props: {
    secureList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.7,
        spaceBetween: 30,
        freeMode: true,
      }
    }
  }
}
</script>
<style lang="scss">
  .secure-slider{
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
            height: 254px;
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
    }
  }
</style>
