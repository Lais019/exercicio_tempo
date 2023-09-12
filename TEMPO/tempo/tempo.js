function consultarClima() {
    const climaInput = document.getElementById('climaInput').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${climaInput}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`;

    fetch(url)
        .then(response => response.json())//transforma em json
        .then(data => {


            console.log(data)
            if (data.erro) {
                resultado.innerHTML = '';
            } else {
                resultado.innerHTML = `
                    
                    <p>Cidade: ${data.name}</p>
                    <p>Temperatura: ${data.main.temp} º</p>
                    <p>Temperatura máxima: ${data.main.temp_max} º</p>
                    <p>Temperatura mínima: ${data.main.temp_min} º</p>
                    <p>Umidade: ${data.main.humidity}%</p>
                    <p>Vento: ${data.wind.speed} km/h</p>
                `;
            }
        })

}
  