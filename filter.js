const filterLctn = document.getElementById("filtro-ubicacion");

filterLctn.addEventListener("change", () => {
  const selected = filterLctn.value;
  const ofertas = document.querySelectorAll(".tarjeta-oferta");
  
  ofertas.forEach((oferta) => {
    const ubicacion = oferta.getAttribute("data-ubicacion");
    const isShown = selected === "all" || selected === ubicacion;
    oferta.classList.toggle("is-hidden", !isShown);
  });
});