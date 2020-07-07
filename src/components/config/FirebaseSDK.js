import firebase from 'firebase';

export default FirebaseSDK(){
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyBMbMBHtcWY25e35BagnR_EVlXvIzoIKaw',
        databaseURL: 'https://globalshala-live-chat.firebaseio.com',
        projectId: 'globalshala-live-chat',
        storageBucket: 'globalshala-live-chat.appspot.com',
        messagingSenderId: '250121240254'
      });
    }
  }
