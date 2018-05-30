<template>
  <div :class="$style.adverContent">
    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t20983/309/394209405/37378/799b3d4a/5b0baae0Nf276c1a1.png?width=750&height=260" alt="">
  </div>
</template>

<script>
export default {
  name: 'HomeAdver'
}
</script>

<style lang="scss" module>
  .adverContent {
    width: 100%;
    background: #fff;
    margin-top: 16px;
    margin-bottom: 16px;

    > img {
      width: 100%;
      padding-bottom: 28px;
    }
  }
</style>

