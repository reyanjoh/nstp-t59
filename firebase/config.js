var firebaseConfig = {
    apiKey: "AIzaSyCByUszTX9T2YY1GqB6I_fSeTOqaF1gr-c",
    authDomain: "blog-blog-for-nstp.firebaseapp.com",
    projectId: "blog-blog-for-nstp",
    storageBucket: "blog-blog-for-nstp.appspot.com",
    messagingSenderId: "599492374603",
    appId: "1:599492374603:web:916a7c6470b28e6767ddce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true })
