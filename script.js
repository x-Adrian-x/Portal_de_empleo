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

const select = document.getElementById("filtro-ubicacion");

select?.addEventListener("change", (event) => {
  const selectedUbicacion = event.target.value;
  const ofertas = document.querySelectorAll(".contenedor-ofertas > div");

  ofertas.forEach(oferta => {
    const ubicacionSpan = oferta.querySelector(".ubicacion");
    const ubicacion = ubicacionSpan.textContent;

    if (selectedUbicacion === ubicacion) { 
      oferta.style.display = "grid";
    } else {
      oferta.style.display = "none";
    }
  });
});

// contenedor?.addEventListener("keydown", (event) => {
//   const elemento = event.target;

//   if (event.key === "Enter") {
//     window.open("./detalles-empleo.html", "_blank");
//     // window.location.href = "./detalles-empleo.html";
//   }
// });
