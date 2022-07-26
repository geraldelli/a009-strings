// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

// c) Substitua os traços `________` por “sticioso”.

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
console.log(minhaString)
console.log(minhaString.length)

const minhaStringTrim = minhaString.trim()
console.log(minhaStringTrim)
console.log(minhaStringTrim.length)

const novaString = minhaString.replaceAll("________","sticioso")
console.log(novaString)

