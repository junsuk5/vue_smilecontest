<template>
  <div id="app">
    <Counter/>
    <FirestoreExam/>
  </div>
</template>

<script>
  import Counter from './components/Counter'
  import FirestoreExam from './components/FirestoreExam'

  export default {
    name: 'app',
    components: {
      Counter,
      FirestoreExam
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
