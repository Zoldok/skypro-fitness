import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAW2mXvaJPJoPm2QUl3Fkb51uI3OIzj3CA',
  authDomain: 'fitness-pro-919d9.firebaseapp.com',
  databaseURL:
    'https://fitness-pro-919d9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fitness-pro-919d9',
  storageBucket: 'fitness-pro-919d9.appspot.com',
  messagingSenderId: '959747852287',
  appId: '1:959747852287:web:e87eaf26df3f83e41989ca',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app
