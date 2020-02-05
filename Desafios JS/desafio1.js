/*CÁLCULO IMC*/
const nome = 'Carlos';
const peso = 84;
const altura = 1.50;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`Carlos você está acima do peso`);
}
if (imc < 29.9) {
    console.log(`Carlos você não está acima do peso`);
}

/*CÁLCULO DE APOSENTADORIA*/
const pessoa = 'Silvana';
const sexo = 'F';
const idade = 68;
const contribuicao = 23;

if (sexo == 'M') {
    if ((idade+contribuicao) >= 95) {
        console.log(`${pessoa} você pode se aposentar`);
    }else {
        console.log(`${pessoa} você não pode se aponsentar`);
    }
} else if (sexo == 'F') {
    if ((idade+contribuicao) >= 85) {
        console.log(`${pessoa} você pode se aposentar`);
    }else {
        console.log(`${pessoa} você não pode se aponsentar`);
    }    
}
