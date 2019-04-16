<template>
  <div>
    최신 영화 목록
    <input v-model="query">
    <br>
    <article v-for="(movie, idx) in filteredMovies" :key="idx">
      <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" width="100" height="100" alt=""/>
      <h1>{{movie.title}}</h1>
      {{movie}}
    </article>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'MovieUpcoming',
    data () {
      return {
        query: null,
        movies: [],
        filteredMovies: []
      }
    },
    methods: {
      getUpcoming: function () {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=a64533e7ece6c72731da47c9c8bc691f&language=ko-KR&page=1')
          .then(value => {
            this.movies = value.data.results
            this.filteredMovies = this.movies
          })
      },
    },
    watch: {
      query: function (query) {
        this.filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().includes(query))
      }
    },
    created () {
      this.getUpcoming()
    }
  }
</script>

<style scoped>

</style>
