<template>
  <section class="panel">
    <h4>{{title}}</h4>
    <div>{{content}}</div>
  </section>
</template>
<script>
export default {
  props: {
    title: {type: String, default: ""},
    content: {type: String, default: ""}
  }
}
</script>
<style lang="scss" scoped>
  @import "../../css/element.scss";
  .panel {
    @include panel;
  }
</style>
