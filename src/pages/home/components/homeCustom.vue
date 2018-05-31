<template lang="html">
  <div>
    <section :class="$style.content">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" />
    </section>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.id">
        <img :src="item.url" alt="item.title">
        <h4>{{item.title}}</h4>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'HomeCustom',
  data () {
    return {
      enters: [
        {
          id: '1',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
          href: '',
          title: '客户端'
        },
        {
          id: '2',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108',
          href: '',
          title: '触屏版'
        },
        {
          id: '3',
          url: 'https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108',
          href: '',
          title: '电脑版'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
  @import './../../../assets/styles/element.scss';
  
  .content {
    width: 100%;
    margin-top: 20px;

    > img {
      width: 100%;
    }
  }

  .list {
    @include list(row);
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
        font-size: 24px;
        margin-top: 12px;
        color: #999;
      }
    }
  }
</style>
