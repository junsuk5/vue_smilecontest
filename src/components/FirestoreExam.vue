<template>
  <div>
    firestore

    <article v-for="(rank, idx) in ranks" :key="idx">
      <img v-bind:src="rank.imageUrl" width="100" height="100" alt=""/>
      <h1>{{rank.score}}</h1>
    </article>
  </div>
</template>

<script>
  import firebase from '../firebase'

  export default {
    name: 'FirestoreExam',
    data () {
      return {
        ranks: [],
        ref: firebase.firestore().collection('smileRank').orderBy('score', 'desc').limit(10),
      }
    },
    created () {
      this.ranks = []
      this.ref.onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          this.ranks.push(doc.data())
        })
      })
    }
  }
</script>

<style scoped>

</style>
