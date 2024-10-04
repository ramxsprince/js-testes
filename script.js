// adicionar conteudo html
document.getElementById("myElement").innerHTML = "Olá meu nome é Cassiano " ;

//Troca de classe, cor e texto de elemento
var elem = document.getElementById("myElement");
elem.className = "novaClasse";
elem.style.color = "red";
elem.innerText = "Texto alterado";

//Leitura de formulários e cálculo
function calcular() {
    var v1 = +document.getElementById("valor1").value;
    var v2 = +document.getElementById("valor2").value;
    document.getElementById("resultado").innerText = v1 + v2;
  }

  //Adiciona novos elementos com JS
  var novo = document.createElement("div");
novo.innerHTML = "Novo elemento";
document.body.appendChild(novo);

//Capturando localização
navigator.geolocation.getCurrentPosition(function(pos) {
    document.getElementById("location").innerText = pos.coords.latitude + ", " + pos.coords.longitude;
  });
  

  