import firebase from "firebase";

export default function FirebaseSDK() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyCK9Z5b7RVux3ra335pMMuDfPoFWw2_kzg",
      databaseURL: "https://globalshala-live-chat.firebaseio.com",
      projectId: "globalshala-live-chat",
      storageBucket: "globalshala-live-chat.appspot.com",
      messagingSenderId: "250121240254",
    });
  }
}
FirebaseSDK();
