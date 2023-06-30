let párrafo;
let spanEstilo;
let numero;
document.body.addEventListener("keypress", (e) => {
    document.body.innerHTML="";
    párrafo=document.createElement("p");
    párrafo.textContent="Tu presionaste la tecla ";
    document.body.appendChild(párrafo);
    spanEstilo=document.createElement("span");
    spanEstilo.textContent=e.key.toUpperCase();
    spanEstilo.style.color="#FCFF00";
    párrafo.appendChild(spanEstilo);
    numero=document.createElement("p");
    numero.style.color="#FF0400"
    numero.textContent=+e.keyCode;
    document.body.appendChild(numero);
});
