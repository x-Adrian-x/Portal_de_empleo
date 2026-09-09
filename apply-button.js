const containerJobs = document.querySelector(".contenedor-ofertas");

containerJobs?.addEventListener("click", (event) => {
  const elemento = event.target;

  if (elemento.classList.contains("btn-aplicar")) {
    elemento.textContent = "Aplicado";
    elemento.classList.add("is-applied");
    elemento.disabled = true;
  } else {
    window.location.href = "./detalles-empleo.html";
  }
});