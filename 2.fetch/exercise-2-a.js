const urlApi = 'https://api.nationalize.io?name=';

document.getElementById('boton').addEventListener('click', () => {
  const name = document.getElementById('input').value;
  const url = urlApi + name;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    })
    .catch(error => console.error(error));
});