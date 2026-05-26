const contenedorJobs = document.querySelector(".contenedor-ofertas");
const filterLctn = document.getElementById("filtro-ubicacion");

contenedorJobs?.addEventListener("click", (event) => {
  const elemento = event.target;

  if (elemento.classList.contains("btn-aplicar")) {
    elemento.textContent = "Aplicado";
    elemento.classList.add("is-applied");
    elemento.disabled = true;
  } else {
    window.location.href = "./detalles-empleo.html";
  }
});

fetch("data.json")
  .then((response) => response.json())
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "tarjeta-oferta";

      article.dataset.technology = job.data.technology;
      article.dataset.ubicacion = job.ubicacion;
      article.dataset.nivel = job.data.nivel;

      article.innerHTML = `
          <h3>${job.titulo}</h3>
          <p>${job.empresa} | ${job.ubicacion}</p>
          <p>
            ${job.descripcion}
          </p>
          <button class="btn-aplicar">Aplicar</button>
          `;
      contenedorJobs.appendChild(article);
    });
  })
  .then(() => {
    const ofertas = document.querySelectorAll(".tarjeta-oferta");
    console.log(ofertas);
    filterLctn.addEventListener("change", () => {
      const selected = filterLctn.value;

      ofertas.forEach((oferta) => {
        const ubicacion = oferta.getAttribute("data-ubicacion");
        const isShown = selected === "all" || selected === ubicacion;
        oferta.classList.toggle("is-hidden", !isShown);
      });
    });
  });
