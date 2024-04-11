<template>
  <div>
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style>
@import './main.css'; 
/* 
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
}
*/

</style>
