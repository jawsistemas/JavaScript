//Declaracion de variables
var num1 = 0;
var num2=0 ;
var opera;
var cont=0;

//Funcion que coloca el numero presionado
function darNumero(numero){
  if(num1==0 && num1!=='0.'){
    num1=numero;
  }else{
    num1+=numero;
  }
  refrescar();
}

//Funcion que coloca la coma al presionar dicha imagen
function darComa(){
  if(num1==0){
    num1='0.';
  }else if(num1.indexOf('.')==-1){
    num1+='.';
  }
  refrescar();
}

//Funcion borrar
function borrar(){
  num1=0;
  num2=0;
  document.getElementById('display').innerHTML=0;
}


//Esta funcion realiza las distintas operaciones aritmeticas
function operar(valor){
  if(num1==0){
    num1=parseFloat(document.getElementById("display").innerHTML);
  }
  num2=parseFloat(num1);
  num1=0;
  opera=valor;
}

//Funcion para pulsar igual
function esIgual(){
  num1=parseFloat(num1);
  switch(opera){
    case 1:
      num1+=num2; //suma
    break;
    case 2:
      num1=num2-num1; //resta
    break;
    case 3:
      num1*=num2; //multiplicacion
    break;
    case 4:
      num1=num2/num1; //division
    break;
    case 5:
      num1=Math.sqrt(num1); //raiz cuadrada
    break;
  }
  refrescar();
  num2=parseFloat(num1);
  num1=0;
}

function refrescar(){
  document.getElementById('display').innerHTML=num1;
}
