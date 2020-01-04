import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDGLMbNVaaZzAnz3JLeArM9vd4bZL4a27M",
  authDomain: "crown-db-80c23.firebaseapp.com",
  databaseURL: "https://crown-db-80c23.firebaseio.com",
  projectId: "crown-db-80c23",
  storageBucket: "crown-db-80c23.appspot.com",
  messagingSenderId: "137071542182",
  appId: "1:137071542182:web:c22624b005bf5ae307d967"
};

export const createUserPropfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) {
      return
    }
    console.log(userAuth)
    const userRef = firestore.doc(`user/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (e) {
        console.log('error creating user',e);
      }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;