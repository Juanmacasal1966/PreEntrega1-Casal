let numero1 = parseFloat(prompt("Ingresar primer número"));
let operacion = prompt("Ingrese operación (+, -, *, /) ");
let numero2 = parseFloat(prompt("Ingresar segundo número"));

switch (operacion) {
    case "+":
        alert(numero1 + numero2);
        break;
    case "-":
        alert(numero1 - numero2);
        break;
    case "*":
        alert(numero1 * numero2);
        break;
    case "/":
        if (numero2 !== 0) {
            alert(numero1 / numero2);
        } else {
            alert("La operación no es válida");
        }
        break;
    default:
        alert("Operador no válido");
}





    
        

     
