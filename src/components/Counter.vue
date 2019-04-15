<template>
  <div id="counter">
    <h1>{{ count }}</h1>
    <br>
    <b-button variant="danger" v-on:click="addCounter">+</b-button>
    &nbsp;
    <b-button variant="success" v-on:click="subCounter">-</b-button>
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
