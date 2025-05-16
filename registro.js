
emailjs.init("onZPQ5DlnrOemlx8n"); 
  
document.getElementById("registro-form").addEventListener("submit", function(e) {
  e.preventDefault(); 


  emailjs.sendForm("service_rsdv41n", "template_jch3ao9", this)
    .then(() => {
      alert("¡Registro enviado exitosamente!\n Recuerda te enviaremos un correo o un mensaje con la información de tu registro en un maximo de 24 horas."); 
      window.location.href = "../texpress.html";
    }, (error) => {
      alert("Error al enviar: " + JSON.stringify(error)); 
    });
});

document.querySelectorAll('.acordeon-titulo').forEach(titulo => {
  titulo.addEventListener('click', () => {
    const acordeonContenido = titulo.nextElementSibling;

    document.querySelectorAll('.acordeon-contenido').forEach(contenido => {
      if (contenido !== acordeonContenido) {
        contenido.classList.remove('show');
      }
    });

    acordeonContenido.classList.toggle('show');
  });
}); 
