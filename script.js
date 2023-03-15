function exibirMsg(){
    console.log("estou exibindo uma msg")
}
exibirMsg()

function teste(estafuncao){
    console.log(estafuncao);
}

teste("tudo certo")

function mostrarNome(nome){
console.log(nome);
}
mostrarNome("caroline")
mostrarNome("joao")

function sobreMim(nome,idade,estilomusical){
    console.log(nome,idade,estilomusical);

}
sobreMim("Caroline",22,"Pop")

function gostos(filme,musica){
    console.log(filme,musica)
}
gostos("as branquelas","telephone")

function triplo(numero){
    console.log(numero)

}
triplo(3*3)


let idade= 22;

function verificarIdade(){
    if (idade > 18){
        return console.log("você pode ver esse filme");
    } else (idade < 18);{
        return console.log("você não pode ver esse filme");
    }

    }
   

verificarIdade();