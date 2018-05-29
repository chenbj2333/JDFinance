<template>
  <Panel title="理财精选" :cname="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>京渤随享盈<span :class="$style.red">90天可质押</span></h4>
        <p :class="$style.number">5.50%</p>
        <p :class="$style.text">历史年化收益率</p>
      </div>
      <div :class="$style.item">
        <h4>年年盈<span :class="$style.red">理财推荐</span></h4>
        <p :class="$style.number">5.10%</p>
        <p :class="$style.text">综合年化收益率</p>
      </div>
      <div :class="$style.item">
        <h4>建信养老飞益鑫<span :class="$style.red">1000起投</span></h4>
        <p :class="$style.number">4.72%</p>
        <p :class="$style.text">近7日年化收益</p>
      </div>
      <div :class="$style.item">
        <h4>小白基金<span :class="$style.red">超短期</span></h4>
        <p :class="$style.number">4.50%</p>
        <p :class="$style.text">7日年化收益率</p>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from '../../../common/components/panel.vue'

export default {
  name: 'HomeNovice',
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
      padding: 2px 3px;
      margin-left: 10px;
      height: 17px;
      line-height: 17px;
    }
  }
</style>


