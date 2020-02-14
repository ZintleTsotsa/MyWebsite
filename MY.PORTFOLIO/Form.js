var firebaseConfig = {
    apiKey: "AIzaSyDaFFt5FwuBYXsrIE_elTxYhBqKMyffPMc",
    authDomain: "contact-form-5c67f.firebaseapp.com",
    databaseURL: "https://contact-form-5c67f.firebaseio.com",
    projectId: "contact-form-5c67f",
    storageBucket: "contact-form-5c67f.appspot.com",
    messagingSenderId: "1040146647645",
    appId: "1:1040146647645:web:9a9a9c98b4a16ac97fdbb4",
    measurementId: "G-WV8K2VB9HW"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('message');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var text = getInputVal('text');
  
    // Save message
    saveMessage(name, email, text);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, text){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      text:text
    });
  }