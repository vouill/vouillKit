<template>
  <div class="vouilltip">
    <span class="vouilltip-slot"><slot>This will only be displayed if there is no contentto be distributed.</slot></span>
    <span class="vouilltip-content">{{content}}</span>
    <span class="vouilltip-arrow"></span>
  </div>
</template>
<style>
  .vouilltip {
    position: relative;
    display: inline;
    text-align: center;
  }

  .vouilltip-content {
    min-width: 7em;
    max-width: 14em;
    background-color: #566a75;
    color: white;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-left: auto;
    margin-right: auto;
    transition: all 0.4s;
    text-align: center;
    padding: 0.5em;
    border-radius: 6px;
  }

  .vouilltip-slot ~ span {
    opacity: 0;
    z-index: -1;
  }

  .vouilltip-slot:hover ~ span {
    opacity: 1;
    z-index: 10;
  }

  .vouilltip > .vouilltip-arrow {
    content: '';
    position: absolute;
    top: 0%;
    left: 50%;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-top: 8px solid #566a75;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    transition: all 0.4s;
  }

</style>
<script>
  export default{
    props: ['content'],
    mounted: function () {
      // console.log(this)
    }
  }
</script>
