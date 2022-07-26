//Crie a const para a frase aqui

/*A partir da frase a seguir, faça o que se pede.

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

const novaFrase = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")
console.log(novaFrase)

const possuiVerde = novaFrase.includes("verde")
console.log(possuiVerde)

const possuiLaranja = novaFrase.includes("laranja")
console.log(possuiLaranja)

const trecho = "mas não deixe o gato sair"
console.log(frase.replace(trecho,trecho.toUpperCase()))