let estados = [
	"AC",
	"AL",
	"AM",
	"AP",
	"BA",
	"CE",
	"DF",
	"ES",
	"GO",
	"MA",
	"MG",
	"MS",
	"MT",
	"PA",
	"PB",
	"PE",
	"PI",
	"PR",
	"RJ",
	"RN",
	"RO",
	"RR",
	"RS",
	"SC",
	"SE",
	"SP",
	"TO",
];

for (let i of estados) {
	let myOption = document.createElement("option");
	myOption.id = "estado";
	myOption.innerText = i;
	let container = document.querySelector("#estado");
	container.appendChild(myOption);
}

function interrompe(e) {
	e.preventDefault();
}

let botaoSubmit = document.querySelector("#prevent");
botaoSubmit.addEventListener("click", interrompe);

function limpar(){
	location.reload();
}

let botaoLimpar = document.querySelector("#limpar");
botaoLimpar.addEventListener("click",limpar);