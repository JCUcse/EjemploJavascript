// Declaración de variables
let párrafo;
let spanEstilo;
let numero;

// Agregar evento de escucha para la tecla presionada
document.body.addEventListener("keypress", (e) => {
  // Limpiar el contenido del body
  document.body.innerHTML = "";

  // Crear un elemento de párrafo
  párrafo = document.createElement("p");
  párrafo.textContent = "Presionaste la tecla ";// Agregar texto al elemento parrafeo
  document.body.appendChild(párrafo);

  // Crear un elemento de span para mostrar la tecla presionada en mayúsculas
  spanEstilo = document.createElement("span");
  spanEstilo.textContent = e.key.toUpperCase();// Convertir la tecla presiona a mayúscula 
  spanEstilo.style.color = "#FCFF00"; // Establecer color de texto amarillo
  párrafo.appendChild(spanEstilo);

  // Crear un elemento de párrafo para mostrar el código de la tecla
  numero = document.createElement("p");
  numero.style.color = "#FF0400"; // Establecer color de texto rojo
  numero.textContent = e.keyCode;// Agregar el código de tecla al elemento parrafeo
  document.body.appendChild(numero);
});