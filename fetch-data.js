const containerJobs = document.querySelector(".contenedor-ofertas");

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
      containerJobs.appendChild(article);
    });
  });