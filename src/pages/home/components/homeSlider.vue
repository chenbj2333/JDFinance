<template>
  <article class="home-slider">
    <Slider :swiperOption="swiperOption" :items="sliderList" cname="slider" />
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.id">
        <img :src="item.url" alt="item.title">
        <h4>{{item.title}}</h4>
      </div>
    </section>
  </article>
</template>
<script>
import Slider from './../../../common/components/slider.vue'

export default {
  name: 'HomeSlider',
  components: {
    Slider
  },
  props: {
    sliderList: {
      type: Array,
      default () {
        return []
      }
    },
    enters: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-bullet-active'
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>
<style lang="scss">
  .slider {
    margin-top: 110px;

    img {
      width: 100%;
    }

    .swiper-bullet-active {
      background: #fff;
      opacity: .9;
    }
  }
</style>
<style lang="scss" module>
@import '../../../assets/styles/element.scss';

  .list {
    @include list(row);
    background: #fff;
    padding: 40px 0 20px 0;
    justify-content: space-around;

    .item {
      text-align: center;

      > img {
        display: inline-block;
        width: 80px;
        height: 80px;
      }

      > h4 {
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
