/**
 Consignas:
_Abrir el archivo evaluacion5.html y guardarlo como evaluacion5_apellido.html (ej. evaluacion5_rodriguez.html)
_Partiendo del siguiente array: 
var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
-Elaborar un pequeño script que: 
-Le pida al usuario que ingrese un número entre 0 y 25, y una letra, y las almacene cada dato en una variable. (Pista: prompt() ) 
-En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 25. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
-Si el número es válido, se calcula la letra que le corresponde en el array.
-Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que “Ha perdido”. -En otro caso, se muestra un mensaje indicando que el número y la letra coinciden y que “Ha ganado”.
 */

window.onload=()=>{
    const letras =['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
    const numeroIngresado = prompt('ingrese un numero entre 0 y 25');
    const letraIngresada = prompt('ingrese una letra cualquiera').toUpperCase();

    comprobacion(numeroIngresado, letras,letraIngresada)
}


const comprobacion=(elemento1,elemento2,elemento3)=>{
    elemento1= elemento1.trim();
    elemento3= elemento3.trim();

    if(elemento1 < 0 || elemento1 > 25 || isNaN(elemento1)) {
          alert('numero proporcionado no es válido')
    }else{
        if (elemento2[elemento1] != elemento3) {
            alert('Ha perdido')
        }else{
            alert('La letra y el número ingresados coinciden con el array')
            alert('Ha ganado!')
        }
       

      }
    }


