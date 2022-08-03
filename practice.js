var firebaseConfig = {
    apiKey: "AIzaSyCidD3G5xRsnGBGqSGN9jX6luzeoDHwsMo",
    authDomain: "kwitter-202f8.firebaseapp.com",
    databaseURL: "https://kwitter-202f8-default-rtdb.firebaseio.com",
    projectId: "kwitter-202f8",
    storageBucket: "kwitter-202f8.appspot.com",
    messagingSenderId: "800447348078",
    appId: "1:800447348078:web:158d268839c928627f957f",
    measurementId: "G-3PPHD35YC4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function add_user()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        colour : "blue"
    });
}