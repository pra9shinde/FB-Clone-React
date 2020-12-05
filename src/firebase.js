import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAFLKQSZyAv_1zrIEIPoPPUG3WsWaE0ekE',
    authDomain: 'fb-clone-react-a59e9.firebaseapp.com',
    databaseURL: 'https://fb-clone-react-a59e9.firebaseio.com',
    projectId: 'fb-clone-react-a59e9',
    storageBucket: 'fb-clone-react-a59e9.appspot.com',
    messagingSenderId: '91170839409',
    appId: '1:91170839409:web:61d9af3214c58be53274d0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
