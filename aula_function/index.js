var wins = 20, defeats = 10;
var level = "";
var balance = calcBalance(wins, defeats);

if(balance < 10) {
    level = "Ferro";
} else if(balance < 21) {
    level = "Bronze";
} else if(balance < 51) {
    level = "Prata";
} else if(balance < 81) {
    level = "Ouro";
} else if(balance < 91) {
    level = "Diamante";
} else if(balance < 101) {
    level = "Lendário";
} else if(balance >= 101) {
    level = "Imortal";
}

console.log("O Herói tem um saldo de " + balance + " e está no nível " + level);

function calcBalance(win, defeat) {
    balance = win - defeat;
    return balance;
}

