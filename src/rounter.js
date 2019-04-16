import Counter from './components/Counter'
import VueRouter from 'vue-router'
import FirestoreExam from './components/FirestoreExam'
import MovieUpcoming from './components/MovieUpcoming'

const router = new VueRouter({
    routes: [
      {
        path: '/counter',
        component: Counter
      },
      {
        path: '/firestore',
        component: FirestoreExam
      },
      {
        path: '/movies',
        component: MovieUpcoming
      },
    ]
  }
)
export default router
