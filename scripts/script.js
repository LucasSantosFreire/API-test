function FindCity(cityName){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d13e4218b37d9e559b8316ebcbf0ed51&lang=pt_br`)
  }

async function onFormSubmit() {
    const cidade = document.getElementById("cidadeLabel").value;
    const status = document.getElementById("status");
    resetForm(); 
    //PROSMISES
    /*FindCity(cidade)
        .then(response => response.json())
        .then(data =>{
                document.getElementById("status").innerHTML = "OK"
                document.getElementById("cidade").innerHTML = data.name;
                var conta = data.main.temp_min - 273.15;
                document.getElementById("temp_min").innerHTML = parseFloat(conta.toFixed(1)) + "°C";
                var conta = data.main.temp_max - 273.15;
                document.getElementById("temp_max").innerHTML = parseFloat(conta.toFixed(1)) + "°C";
                document.getElementById("humidade").innerHTML = data.main.humidity + "%";
                document.getElementById("pais").innerHTML = data.sys.country;
        })
        .catch(err => {
            status.innerHTML = `Cidade não fornecida ou não existe!`;
            resetTable();
        })*/

        //ASYNC / AWAIT
        const Cityresponse = await FindCity(cidade);
        const data = await Cityresponse.json();
        if(data.name != undefined){
        document.getElementById("status").innerHTML = "OK"
        document.getElementById("cidade").innerHTML = data.name;
        var conta = data.main.temp_min - 273.15;
        document.getElementById("temp_min").innerHTML = parseFloat(conta.toFixed(1)) + "°C";
        var conta = data.main.temp_max - 273.15;
        document.getElementById("temp_max").innerHTML = parseFloat(conta.toFixed(1)) + "°C";
        document.getElementById("humidade").innerHTML = data.main.humidity + "%";
        document.getElementById("pais").innerHTML = data.sys.country;
        }else{
            status.innerHTML = `Cidade não fornecida ou não existe!`;
            resetTable();
        }
}
function resetForm() {
    document.getElementById("cidadeLabel").value = "";
}
function resetTable(){
    document.getElementById("cidade").innerHTML = "";
    document.getElementById("temp_min").innerHTML = "";
    document.getElementById("temp_max").innerHTML = "";
    document.getElementById("humidade").innerHTML = "";
    document.getElementById("pais").innerHTML = "";
}