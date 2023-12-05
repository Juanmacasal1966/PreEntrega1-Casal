let resultados = JSON.parse(localStorage.getItem("resultados")) || [];

function calcular() {
    let numero1 = parseFloat(document.getElementById("number1").value);
    let operacion = document.getElementById("operation").value;

    if (operacion === "^" || operacion.toLowerCase() === "raiz") {
        let exponente;
        if (operacion === "^") {
            exponente = parseFloat(document.getElementById("exponente").value);
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
        let numero2 = parseFloat(document.getElementById("number2").value);

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
        localStorage.setItem("resultados", JSON.stringify(resultados));
        actualizarResultadosEnConsola();
    }
}

function buscarResultado() {
    let valorBuscado = parseFloat(document.getElementById("searchResult").value);

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
    let condicion = parseFloat(document.getElementById("filterCondition").value);

    let resultadosFiltrados = resultados.filter(resultado => resultado > condicion);

    alert(`Resultados mayores que ${condicion}: ${resultadosFiltrados.join(", ")}`);
}

function actualizarResultadosEnConsola() {
    let resultadosEnConsola = document.getElementById("resultadosEnConsola");
    resultadosEnConsola.innerHTML = "Resultados almacenados: " + resultados.join(", ");
}

document.getElementById("operation").addEventListener("change", function () {
    let selectedOperation = this.value;
    let exponenteContainer = document.getElementById("exponenteContainer");
    let number2Label = document.getElementById("number2Label");
    let number2Input = document.getElementById("number2");

    exponenteContainer.style.display = selectedOperation === "^" ? "block" : "none";
    number2Label.style.display = selectedOperation !== "raiz" ? "block" : "none";
    number2Input.style.display = selectedOperation !== "raiz" ? "block" : "none";
});

   



    
        

     
