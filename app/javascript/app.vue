<template>
  <div id="home-quote">
    <TypeEffect />
  </div>
</template>

<script>
import TypeEffect from './components/TypeEffect.vue'
export default {
  name: 'home-quote',
  components: {
    TypeEffect
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Righteous');
  body {
    margin: 0;
    padding: 0;
  }
</style>
