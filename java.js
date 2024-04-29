
const textos = document.querySelectorAll(“.aba-conteudo”);
textos[i].classList.add(“ativo”); 
textos[j].classList.remove(“ativo”); 
const contadores = document.querySelectorAll(“.contador”);  
contadores[0].textContent = “Contagem regressiva”; 
const contadores = document.querySelectorAll(“.contador”)
const tempoObjetivo1 = new Date(“2024-10-05T00:00:00”); 
let tempoAtual = new Date(); 
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
