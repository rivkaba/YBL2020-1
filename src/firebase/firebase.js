import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD91v4LsW6wytMO6tJoUE7xyVz6BLTm5jk",
    authDomain: "ybl-project-b5e04.firebaseapp.com",
    databaseURL: "https://ybl-project-b5e04.firebaseio.com",
    projectId: "ybl-project-b5e04",
    storageBucket: "ybl-project-b5e04.appspot.com",
    messagingSenderId: "288673703911",
    appId: "1:288673703911:web:e0cc3b8ea3fc61019c3f42",
    measurementId: "G-1RWZH22PZ6"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;


//
// class Firebase {
//     constructor() {
//         firebase.initializeApp(firebaseConfig)
//         this.auth = firebase.auth()
//         this.db = firebase.firestore()
//     }
//
//     login(email, password) {
//         return this.auth.signInWithEmailAndPassword(email, password)
//     }
//
//     logout() {
//         return this.auth.signOut()
//     }
//
//     async register(name, email, password) {
//         await this.auth.createUserWithEmailAndPassword(email, password)
//         return this.auth.currentUser.updateProfile({
//             displayName: name
//         })
//     }
//
//     addQuote(quote) {
//         if(!this.auth.currentUser) {
//             return alert('Not authorized')
//         }
//
//         return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
//             quote
//         })
//     }
//
//     isInitialized() {
//         return new Promise(resolve => {
//             this.auth.onAuthStateChanged(resolve)
//         })
//     }
//
//     getCurrentUsername() {
//         return firebase.auth().currentUser //&& this.auth.currentUser.displayName
//     }
//
//     async getCurrentUserQuote() {
//         const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
//         return quote.get('quote')
//     }
// }

// export default Firebase;