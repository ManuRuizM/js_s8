const urlApi = 'https://api.nationalize.io?name=';

document.getElementById('boton').addEventListener('click', () => {
  const name = document.getElementById('input').value;
  const url = urlApi + name;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const res = document.getElementById('resultado');
      data.country.forEach(country => {
        const parrafo = document.createElement('p');
        parrafo.textContent = `El nombre ${name} tiene un ${Math.round(country.probability * 100)}% de ser de ${country.country_id}`;
        const borrar = document.createElement('button');
        borrar.textContent = 'X';
        borrar.addEventListener('click', () => {
          res.removeChild(parrafo);
        });
        parrafo.appendChild(borrar);
        res.appendChild(parrafo);
      });
    })
    .catch(error => console.error(error));
});





