//parametros de função

function soma(num1, num2){
  return  num1 + num2;
 }


 console.log(soma(2,2));
 
 // parametros x argumentos de função

 function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
 }
 console.log(nomeIdade("João" , 35));

 function multiplica(numero1=1, numero2=1){
    return numero1 * numero2;
 }
 console.log(multiplica(soma(4,5), soma(6,6)))
 console.log(multiplica(soma(4,5) ))

 //