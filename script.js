
var label2 = document.getElementById("result");
var rolagem = document.getElementById("dados");
var botao = document.getElementById("button");


botao.addEventListener("click", function () {

    const [resultString, total] = rollf(rolagem.value);
    label2.textContent = `Resultado: ${resultString}`; 

});



