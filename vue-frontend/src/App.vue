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
  },
  methods: {
    
  }
}

window.onload = function() {
  //alert(document.cookie.split('=')[1])
  var city;
  if (document.cookie.split('=')[0] === 'city') {
    if (document.cookie.split('=')[1] === 'null') {
      document.cookie = "city=Не определено"
    }
  } else {
    city = prompt('Где вы находитесь?');
    document.cookie = "city=" + city 
  }
}
location.reload;

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
