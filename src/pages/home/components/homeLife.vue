<template lang="html">
  <section :class="$style.list">
    <div :class="$style.item" v-for="item in lifeList" :key="item.id">
      <img :src="item.url" alt="item.title">
      <h4>{{item.title}}</h4>
    </div>
  </section>
</template>
<script>

export default {
  name: 'HomeLife',
  props: {
    lifeList: {
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
