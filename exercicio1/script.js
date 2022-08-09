const num = Number(prompt("Digite o seu numero "))

if(num%2===0){
    if(num%3===0){
        console.log("O numero é divido por 2 e por 3 ")

    }
    else{console.log("O numero eh dividido por 2 mas nao por 3")}
}else{console.log("O numero não é divido por 2")}


if(num%2===0 && num%3===0){
    console.log("O numero é divido por 2 e por 3 parabens")
}else{console.log("O numero não é didido por 2 e por 3 que pena")}