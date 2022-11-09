        
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
          var user = null
          
          
          function login(){
              email = document.getElementById('email').value;
              password =  document.getElementById('password').value
              console.log(typeof(password))
              console.log(typeof(email))
      
            firebase.auth().signInWithEmailAndPassword(email,password)
              .then((userCredential)=> {
                  var user = userCredential.user
                  document.getElementById("container-usuario").style.display = "block";
                  document.getElementById("login").style.display = "none";
                  alert("logado")
                  
                
              })
              .catch((error) =>{
                 
                  var errorCode = error.code
                  var errorMessage = error.message
                  alert(errorMessage)
              })
              
              
          }

          function cadastrar(){
       
            email = document.getElementById('emailCadastro').value;
            password =  document.getElementById('passwordCadastro').value
           
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                const user = userCredential.user;
                document.getElementById("container-usuario").display = "block";
                document.getElementById("login").display = "none";
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
                });
        }

var formCadastro = document.querySelector('.form-cadastro-tarefa')

formCadastro.addEventListener('subimit',(e)=>{
    let dateTime = document.querySelector('.form-cadastro-tarefa')
})