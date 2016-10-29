<template>
  <div id="main">
    <img src="./assets/vuelogo.png">
    <img src="./assets/neutroniumlogo.png">
    <h1>{{ viewModel.message }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const props={
  viewModel: Object,
};

export default {
  name: 'app',
  props,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
