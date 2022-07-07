//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}



/*XXXXXXXXXXXXXXXXXXXXX LOGIN Y REGISTER XXXXXXXXXXXXXXXXXXXXX*/
const Register = document.getElementById('register_id')
const Log =  document.getElementById('login_id')

Register.addEventListener('submit',(e) => {
  e.preventDefault()
  //console.log('submited')
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  //console.log(email,password);
  //const nombre = Register['nombre']
  //const email = Register['email']
  //const password = Register['password']
  // guardar_cambios(nombre.value, email.value, password.value)3
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
          console.log('Usuario registrado!');
          alert('Usuario registrado!');
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;           
          console.log(errorMessage);
          alert('Verifique sus datos');
      });
  Register.reset()
})

Log.addEventListener('submit',(e) => {
  e.preventDefault()
  //console.log('submited')
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('login_password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('sesión iniciada');
            alert('Sesión Iniciada Bienvenido');
            //MANDAR A LLAMAR A EL OTRO HTML 
            window.location="menuprincipal.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Verifique su correo o contraseña');
        });
  Log.reset()
  
})

// PRIMER MODAL: DE ACERCA DE NOSOTROS

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    //FIN DEL PRIMER MODAL



//SEGUNDO MODAL CONTACTANOSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
//FIN DEL SEGUNDO MODALXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
