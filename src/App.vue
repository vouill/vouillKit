<template>
  <div id="app">
    <vouill>
      <MainView></MainView>
    </vouill>
  </div>
</template>
<script>
  import MainView from './components/mainView.vue'
  export default {
    name: 'app',
    components: {
      MainView
    }
  }
</script>
<style lang="scss">
</style>
