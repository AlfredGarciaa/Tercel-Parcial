const e=document.querySelector("#texto"),t=document.querySelector("#post-form"),o=document.querySelector("#publicacion-div");t.addEventListener("submit",(t=>{t.preventDefault();const n=e.value;o.innerHTML=" "==n?"<p>'No se puede ingresar un post sin texto'</p>":"<p>"+n+"</p>"}));
//# sourceMappingURL=index.0cfe11c7.js.map
