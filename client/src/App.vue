<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
export default {
  name:'App',
  components: {
    HeaderBar,
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Oswald:wght@200;300;400;500;600;700&display=swap');
#app {
  font-family: Oswald, sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
