//console.log("teste 1")

let numero = +prompt("Digite um número")
console.log("Número: ",numero)
//Exercício 1 - ifs aninhados
//casos de teste: 
//1. divisivel por 2 - imprime "divisivel por 2" **imput 2
//2. divisivel por 3 - imprime "divisivel por 3" **imput 3
//3. divisivel por 2 e 3 - imprime "divisivel por 2 e por 3" **imput 6
//4. não divisivel por 2 nem 3 - imprime "não divisivel por 2 nem por 3" **imput 5

// // Divisível por 2 E 3
if (numero % 2 === 0){
    if(numero % 3 === 0){
        console.log("Esse número é divisível, ao mesmo tempo, por 2 e por 3.")
    } else {
        console.log("Esse número NÃO é divisível ao mesmo tempo por 2 e por 3.")
    }
} else {
    console.log("Esse número NÃO é divisível ao mesmo tempo por 2 e por 3.")
}



// Divisível por 2 OU por 3  -- ifs
if (numero % 2 === 0){
    console.log("Esse número é divisível ou por 2 ou por 3.")
} else if (numero % 3 === 0){
    console.log("Esse número é divisível ou por 2 ou por 3.")
} else {
    console.log("Esse número NÃO é divisível por 2 OU por 3.")
}

// Divisível por 2 OU por 3  -- operadores lógicos
if ((numero % 2 === 0) || (numero % 3 === 0)){
    console.log("Esse número é divisível ou por 2 ou por 3.")
} else {
    console.log("Esse número NÃO é divisível por 2 OU por 3.")
}
