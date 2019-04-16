<template>
  <div id="app">
    <Counter/>
    <MovieUpcoming/>
    <!--<FirestoreExam/>-->
  </div>
</template>

<script>
  import Counter from './components/Counter'
  import FirestoreExam from './components/FirestoreExam'
  import MovieUpcoming from './components/MovieUpcoming'

  export default {
    name: 'app',
    components: {
      MovieUpcoming,
      Counter,
      // FirestoreExam
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
