<template>
  <article class="home-slider">
    <Slider :items="sliderData" />
    <section class="list">
      <div class="item" v-for="item in enters" :key="item.id">
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
  data () {
    return {
      sliderData: [
        {
          id: '01',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t20971/148/288416453/44596/48b1265b/5b07ff25N1625f567.jpg?width=750&height=320',
          href: '',
        },
        {
          id: '02',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t21796/202/262602945/28303/f848cd6b/5b07ff5cN9b554c5b.jpg?width=750&height=320',
          href: '',
        },
        {
          id: '03',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t21160/321/265171359/49600/f6486521/5b07ff97Nf764b48d.jpg?width=750&height=320',
          href: '',
        },
        {
          id: '04',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t20872/57/274489560/49683/e8527414/5b07ffa1N82e0282b.jpg?width=750&height=320',
          href: '',
        }
      ],
      enters: [
        {
          id: '1',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          href: '',
          title: '优惠券'
        },
        {
          id: '2',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          href: '',
          title: '领红包'
        },
        {
          id: '3',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          href: '',
          title: '抢钢镚'
        },
        {
          id: '4',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          href: '',
          title: '白条提额'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.home-slider {
  margin-top: 110px;

  .list {
    display: flex;
    flex-direction: row;

    .item {
      width: 25%;
      text-align: center;

      > img {
        width: 90px;
        height: 90px;
      }

      > h4 {
        font-size: 24px;
        margin: 0;
        font-weight: normal;
      }
    }
  }
}
</style>
