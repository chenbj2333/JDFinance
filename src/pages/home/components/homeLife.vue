<template lang="html">
  <section :class="$style.list">
    <div :class="$style.item" v-for="item in enters" :key="item.id">
      <img :src="item.url" alt="item.title">
      <h4>{{item.title}}</h4>
    </div>
  </section>
</template>
<script>

export default {
  name: 'HomeLife',
  data () {
    return {
      enters: [
        {
          id: '1',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
          href: '',
          title: '旅游'
        },
        {
          id: '2',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
          href: '',
          title: '医美'
        },
        {
          id: '3',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
          href: '',
          title: '房抵贷'
        },
        {
          id: '4',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
          href: '',
          title: '驾校'
        },
        {
          id: '5',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
          href: '',
          title: '分期用'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
  @import './../../../assets/styles/element.scss';
  
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
