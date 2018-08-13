import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDUxQ8QsCgDyKtKMOvXtWzud8MBVKvBcf0",
    authDomain: "photowall-190f6.firebaseapp.com",
    databaseURL: "https://photowall-190f6.firebaseio.com",
    projectId: "photowall-190f6",
    storageBucket: "photowall-190f6.appspot.com",
    messagingSenderId: "1092082069582"
}
firebase.initializeApp(config)
const database = firebase.database()
export {database}