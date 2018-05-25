<template>
  <section :class="[panelClass, cname]">
    <h4>-{{title}}-</h4>
    <slot />
  </section>
</template>
<script>
export default {
  props: {
    title: {type: String, default: ""},
    cname: {type: String, default: ""}
  },
  data() {
    return {
      panelClass: 'panel'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/element.scss";
  .panel {
    @include panel;
  }
</style>
