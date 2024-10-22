const prompt= require('prompt-sync')();
console.log("----BEM-VINDO AO REGISTRADOR DE XP----")
let nome = prompt('Qual o nome do herói? ');
let xp = parseInt(prompt('Qual o valor de XP do seu herói? '));

let cont = 0;

while (true){
    if(xp <1000){
        console.log(`O herói de nome ${nome} está no nível de ferro`);
    }
    else if(xp >1000 && xp <=2000){
        console.log(`O herói de nome ${nome} está no nível de bronze`);
    }
    else if(xp >2000 && xp <=5000){
        console.log(`O herói de nome ${nome} está no nível de prata`);
    }
    else if(xp >5000 && xp <=7000){
        console.log(`O herói de nome ${nome} está no nível de ouro`);
    }
    else if(xp >7000 && xp <=8000){
        console.log(`O herói de nome ${nome} está no nível de platina`);
    }
    else if(xp >8000 && xp <=9000){
        console.log(`O herói de nome ${nome} está no nível de ascendente`);
    }
    else if(xp >9000 && xp <=10000){
        console.log(`O herói de nome ${nome} está no nível de imortal`);
    }
    else if(xp >=10001){
        console.log(`O herói de nome ${nome} está no nível de radiante`);
    }
    else{
        console.log('Valor não reconhecido');
    }
    let resposta = prompt("Deseja continuar? [S] para sim || [N] para não ")
    if (resposta == "S" || resposta == "s") {
        xp = parseInt(prompt('Qual o valor de XP do seu herói? '));
        cont++;
    } else {
        break;
    }
}
console.log("*-*-*-*Obrigada por usar nosso contador de XP! *-*-*-*")