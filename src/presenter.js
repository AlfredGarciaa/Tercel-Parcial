const texto = document.querySelector("#texto");
const post = document.querySelector("#post-form");
const publicacion = document.querySelector("#publicacion-div");

post.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = texto.value;

  publicacion.innerHTML = "<p>" + cadena + "</p>";
});
