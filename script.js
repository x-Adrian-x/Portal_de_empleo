const contenedor = document.querySelector(".contenedor-ofertas");

contenedor?.addEventListener("click", (event) => {
  const elemento = event.target;

  if (elemento.classList.contains("btn-aplicar")) {
    elemento.textContent = "Aplicado";
    elemento.classList.add("is-applied");
    elemento.disabled = true;
  } else {
    window.location.href = "./detalles-empleo.html";
  }
});

// contenedor?.addEventListener("keydown", (event) => {
//   const elemento = event.target;

//   if (event.key === "Enter") {
//     window.open("./detalles-empleo.html", "_blank");
//     // window.location.href = "./detalles-empleo.html";
//   }
// });
