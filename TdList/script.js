        
        const firebaseConfig = {
            apiKey: "AIzaSyDmestdAXnamQR9AAyeXBcCxl4Kphs5lJ8",
            authDomain: "todolist-c481b.firebaseapp.com",
            projectId: "todolist-c481b",
            storageBucket: "todolist-c481b.appspot.com",
            messagingSenderId: "1092062915273",
            appId: "1:1092062915273:web:2ffd761853a6b65be17b18"
          };
        
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
  
          //start
          var usuario = null;
          function login(){
              alert("test")
              email = document.getElementById('email').value;
              password =  document.getElementById('password').value
              console.log(typeof(password))
              console.log(typeof(email))
      
            firebase.auth().signInWithEmailAndPassword(email,password)
              .then((userCredential)=> {
                  var user = userCredential.user
                  alert("logado")
                  window.location.replace("user.html")
              })
              .catch((error) =>{
                 
                  var errorCode = error.code
                  var errorMessage = error.message
                  alert(errorMessage)
              })

              
          }