<template>
  <section :class="cname">
    <swiper :options="swiperOption" ref="mySwiper" :not-next-tick="swiperOption.notNextTick">
      <!-- slides -->
      <swiper-slide v-for="item of items" :key="item.id">
        <router-link :to="{name: item.href}">
          <img :src="item.url" alt="">
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div v-if="swiperOption.pagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Slider',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {type: String, default: ""},
    swiperOption: {type: Object, default() {return {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      notNextTick: false
    }}},
    items: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~swiper/dist/css/swiper.css';

</style>

