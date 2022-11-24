const texto = document.querySelector("#texto");
const post = document.querySelector("#post-form");
const publicacion = document.querySelector("#publicacion-div");

const vacio = " ";
const mensaje = "'No se puede ingresar un post sin texto'";

post.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = texto.value;

  if(cadena == vacio){
    publicacion.innerHTML = "<p>" + mensaje + "</p>";
  }
  else {
    publicacion.innerHTML = "<p>" + cadena + "</p>";
  }
});
