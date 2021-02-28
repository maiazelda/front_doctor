<template>
  <div id="app">
     <h1>Mon compteur</h1>
        
        <input v-model="compteur" type="number">

        <button v-on:click="decrementer">-</button>
        <button v-on:click="incrementer" >+</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    compteur: 0
  }),
  methods: {
    incrementer() {
      this.compteur = parseInt(this.compteur) + 1
    },
    decrementer() {
      this.compteur = parseInt(this.compteur) - 1
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
