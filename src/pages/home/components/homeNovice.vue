<template>
  <Panel title="理财精选" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="i of noviceList" :key="i.id">
        <h4>{{i.title}}<span :class="$style.red">{{i.subtitle}}</span></h4>
        <p :class="$style.number">{{i.number}}</p>
        <p :class="$style.text">{{i.text}}</p>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../../../common/components/panel.vue';

export default {
  name: 'HomeNovice',
  props: {
    noviceList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import './../../../assets/styles/element.scss';

  .panel {
    @include panel;

    h4 {
      font-weight: bold;
    }
  }

  .content {
    @include list(row);

    .item {
      width: 50%;
      padding-left: 32px;
      height: 190px;
      box-sizing: border-box;
    }

    .number {
      color: #FF5155;
      font-size: 40px;
      margin-bottom: 4px;
    }
    .text {
      font-size: 24px;
      height: 34px;
      line-height: 34px;
      color: #999;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    h4 {
      font-size: 26px;
      font-weight: bold;
      height: 42px;
      line-height: 42px;
      margin-bottom: 16px;
    }
    .red {
      border: 1px solid #FF5155;
      color: #FF5155;
      font-size: 20px;
      padding: 4px 6px;
      margin-left: 10px;
      height: 17px;
      line-height: 17px;
      border-radius: 4px;
    }
  }
</style>
