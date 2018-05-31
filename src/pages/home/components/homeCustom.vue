<template lang="html">
  <div>
    <section :class="$style.content">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" />
    </section>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in customList" :key="item.id">
        <img :src="item.url" alt="item.title">
        <h4>{{item.title}}</h4>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'HomeCustom',
  props: {
    customList: {
      type: Array,
      default () {
        return []
      }
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
