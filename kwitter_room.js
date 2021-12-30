var firebaseConfig = {
    apiKey: "AIzaSyBmL1aFiLSsQB46CbZAb3CwVyvyvKNn2xs",
    authDomain: "kwitter-ac9ae.firebaseapp.com",
    databaseURL: "https://kwitter-ac9ae-default-rtdb.firebaseio.com",
    projectId: "kwitter-ac9ae",
    storageBucket: "kwitter-ac9ae.appspot.com",
    messagingSenderId: "684932300246",
    appId: "1:684932300246:web:e19a73f1120f4063963877",
    measurementId: "G-0C8L8VCF9Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("room_name-"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}