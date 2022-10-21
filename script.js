var preco = 6.99;

function mostraValor()
{
    return this.preco;
}

function myFunction()
{
    var valorQuantidade = this.preco * parseFloat(document.getElementById("quant-select").value);
    document.getElementById("total").innerHTML = (valorQuantidade);
}
function zerar(){
    confirm("Deseja confirmar?");
    document.getElementById("total").innerHTML = 0;
}

