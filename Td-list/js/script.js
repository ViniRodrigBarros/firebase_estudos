        
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
          
          const db = firebase.firestore()

          //list


          //start
          
          
  
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

                  db.collection('tarefas').where("id","==",user.uid).onSnapshot((data)=>{
                    let list = document.querySelector('#tarefas')

                    list.innerHTML=""

                    data.docs.map((val)=>{
                       list.innerHTML+=`<li>Data:  ${val.data().date} || Tarefa:  ${val.data().tarefa}   <a tarefa-id="${val.id}" class="excluir" onclick = excluir("${val.id}") href="javascript:void(0)">(x)</a></li>`
                       
                    })
                    
                })
    
              })
              .catch((error) =>{
                 
                  var errorCode = error.code
                  var errorMessage = error.message
                  alert(errorMessage)
              })
          }
          

          function excluir(x){
            db.collection('tarefas').doc(x).delete()
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

        function cadastrarTask(){
           
   
          
            alert('tarefa cadastrada')
            var formCad = document.querySelector('.form-cadastro-tarefa')
         
            firebase.auth().onAuthStateChanged((val)=>{
                if(val){
                    user = val;
                    task = document.getElementById('task').value;
                    data =  document.getElementById('data').value

                    
                    db.collection('tarefas').add({
                        tarefa: task,
                        date: data,
                        id: user.uid
                    })
                    formCad.reset()
                    document.getElementById("container-usuario").style.display = "block";
                    document.getElementById("login").style.display = "none";
                }
          })
            
        }
        function deslogar(){
           
            e.preventDefalt();
            firebase.auth().signOut().then(()=>{
                user = null
                alert("deslogado")
                document.getElementById("container-usuario").display = "none";
                document.getElementById("login").display = "block";
            }).catch((error)=>{
                alert("ERRO")
            })
           

        }