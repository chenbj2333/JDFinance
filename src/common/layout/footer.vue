<template lang="html">
  <footer :class="$style.content">
    <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
    <p>投资有风险，购买需谨慎</p>
    <p>京东金融平台服务协议</p>
    <p>京东金融隐私政策</p>
  </footer>
</template>
<script>

export default {
  name: 'LayoutFooter'
}
</script>

<style lang="scss" module>
  @import '../../assets/styles/element.scss';
  
  .content {
    margin-bottom: 120px;
    width: 100%;
    font-size: 20px;
    color: #999;
    text-align: center;

    > p {
      padding: 24px 28px;
      border-top: 0.5px solid #ddd;
    }
  }
</style>