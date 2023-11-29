let resultados = [];

function calcular() {
    let numero1 = parseFloat(prompt("Ingresar primer número"));
    let operacion = prompt("Ingrese operación (+, -, *, /, ^, raiz) ");
    
    // Verificar si la operación es de elevar o calcular raíz
    if (operacion === "^" || operacion.toLowerCase() === "raiz") {
        let exponente;
        if (operacion === "^") {
            exponente = parseFloat(prompt("Ingrese el exponente"));
        }
        
        if (operacion.toLowerCase() === "raiz" && numero1 < 0) {
            alert("No se puede calcular la raíz cuadrada de un número negativo");
            return;
        }
        
        if (operacion.toLowerCase() === "raiz") {
            resultado = Math.sqrt(numero1);
        } else {
            resultado = Math.pow(numero1, exponente);
        }
    } else {
        let numero2 = parseFloat(prompt("Ingresar segundo número"));

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
    }

    alert(`El resultado es: ${resultado}`);
    return resultado;
}

function calcularConAlmacenamiento() {
    let resultado = calcular();
    if (resultado !== undefined) {
        resultados.push(resultado);
        actualizarResultadosEnConsola();
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

function actualizarResultadosEnConsola() {
    let resultadosEnConsola = document.getElementById("resultadosEnConsola");
    resultadosEnConsola.innerHTML = "Resultados almacenados: " + resultados.join(", ");
}



    
        

     
