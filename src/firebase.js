import * as firebase from 'firebase'
import 'firebase/firestore'
import config from '../key/firebase_key'

firebase.initializeApp(config)

export default firebase
