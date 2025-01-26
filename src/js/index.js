const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

btnAvancar.addEventListener("click", function() {
    const cartaoSelecionado = document.querySelector(".cartao.selecionado");
    const proximoCartao = cartaoSelecionado.nextElementSibling;

    if (proximoCartao) { 
        cartaoSelecionado.classList.remove("selecionado");
        proximoCartao.classList.add("selecionado");
    }
});

btnVoltar.addEventListener("click", function() {
    const cartaoSelecionado = document.querySelector(".cartao.selecionado");
    const anteriorCartao = cartaoSelecionado.previousElementSibling;

    if (anteriorCartao) { 
        cartaoSelecionado.classList.remove("selecionado");
        anteriorCartao.classList.add("selecionado");
    }
});
