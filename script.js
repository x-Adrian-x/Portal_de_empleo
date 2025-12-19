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

const filterLctn = document.getElementById("filtro-ubicacion");
const ofertas = document.querySelectorAll(".tarjeta-oferta");

filterLctn.addEventListener("change", () => {
  const selected = filterLctn.value;
  
  ofertas.forEach(oferta => {
    const ubicacionSpan = oferta.querySelector(".ubicacion");
    const ubicacion = ubicacionSpan.textContent;
    const isShown = selected === "all" || selected === ubicacion;
    oferta.classList.toggle('is-hidden', !isShown);
  });
});
