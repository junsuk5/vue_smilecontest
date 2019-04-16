<template>
  <div id="app">
    <p>Current route name: {{ $route.name }}</p>
    <ul>
      <li>
        <router-link to="/counter">카운터</router-link>
      </li>
      <li>
        <router-link to="/firestore">Firestore</router-link>
      </li>
      <li>
        <router-link to="/movies">영화정보</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
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
