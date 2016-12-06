<template>
  <div>
 <slot></slot>
  </div>
</template>
<style lang="scss">
  @import "../assets/base";
  @import '../assets/button';
  @import '../assets/helpers';
  @import '../assets/positioning';

  body.modal-open {
    overflow: hidden;
  }
</style>
<script>
  export default{
    name: 'vouill'
  }
</script>
