var nome = "Giovanni";
var xp = 1000;
var nivel;

if(xp < 1000) {
    console.log("Seu rank é ferro");
    nivel = "ferro";
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
} else if(xp < 2001) {
    console.log("Seu rank é bronze");
    nivel = "bronze";
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
} else if(xp < 6001) {
    console.log("Seu rank é prata");
    nivel = "prata";
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
} else if(xp < 7001) {
    console.log("Seu rank é ouro");
    nivel = "ouro";
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
} else if(xp < 8001) {
    console.log("Seu rank é platina");
    nivel = "platina";
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
} else if(xp < 9001) {
    console.log("Seu rank é ascendente");
    nivel = "ascendente";
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
} else if(xp >= 9001) {
    console.log("Seu rank é radiante");
    nivel = "radiante";
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
}


