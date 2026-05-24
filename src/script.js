const boton = document.getElementById("clickMe");
const mensaje = document.getElementById("message");

boton.addEventListener("click", () => {
    mensaje.textContent = "🚀 ¡JavaScript está funcionando correctamente!";
});