
function calcular() {
    let numero1 = parseFloat(prompt("Ingresar primer número"));
    let operacion = prompt("Ingrese operación (+, -, *, /) ");
    let numero2 = parseFloat(prompt("Ingresar segundo número"));

    let resultado;

    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                alert("La operación no es válida");
                return;
            }
            break;
        default:
            alert("Operador no válido");
            return;
    }

    alert("El resultado es: " + resultado);
}

let resultados = [];


function calcularConAlmacenamiento() {
    let resultado = calcular();
    if (resultado !== undefined) {
        resultados.push(resultado);
    }

 }

function buscarResultado() {
    let valorBuscado = parseFloat(prompt("Ingrese el resultado a buscar"));


    let margenError = 0.000001;

    
    for (let i = 0; i < resultados.length; i++) {
        if (Math.abs(resultados[i] - valorBuscado) < margenError) {
            alert(`El resultado ${valorBuscado} se encontró en la posición ${i} de los resultados.`);
            return; 
        }
    }

    alert("El resultado no se encontró en la lista.");
}



function filtrarResultados() {
    let condicion = parseFloat(prompt("Ingrese la condición de filtrado"));

    let resultadosFiltrados = resultados.filter(resultado => resultado > condicion);

    alert(`Resultados mayores que ${condicion}: ${resultadosFiltrados.join(", ")}`);
}

let continuar = true;

while (continuar) {
    calcularConAlmacenamiento();
    let respuesta = prompt("¿Desea realizar otro cálculo? si/no");

    if (respuesta !== "si") {
        continuar = false;
    }
}

alert("Resultados almacenados: " + resultados.join(", "));


buscarResultado();

filtrarResultados();

alert("¡Gracias por usar la calculadora!");


    
        

     
