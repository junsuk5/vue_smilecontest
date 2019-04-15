<template>
  <div id="counter">
    <h1>{{ count }}</h1>
    <br>
    <button v-on:click="addCounter">+</button>
    <br>
    <button v-on:click="subCounter">-</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data () {
      return {
        count: 0
      }
    },
    methods: {
      addCounter: function () {
        this.count++
      },
      subCounter: function () {
        this.count--
      }
    }
  }
</script>

<style scoped>

</style>
