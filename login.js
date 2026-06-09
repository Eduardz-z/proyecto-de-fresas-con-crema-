document.getElementById('formularioLogin').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    // Evita que el formulario se envie automáticamente


// Obtener valores

const usuario = document.getElementById('usuario').value; 
const contrasena = document.getElementById('contrasena').value;

// Validación basica

if(usuario === 'FRESAS' && contrasena === '1231'){


alert('Inicio de sesión exitoso. ¡Bienvenido!'); 
// Aqui podrias redirigir a otra página:
 window.location.href = "index.html";

 } else{

alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
}
});