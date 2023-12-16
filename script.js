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

    Swal.fire({
        title: "Resultado calculado",
        text: `El resultado es: ${resultado}`,
        confirmButtonText: "OK"
    });
    
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

Swal.fire({
    title: "Estas listo para comenzar?",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });

  // Agrega tu clave de API de Unsplash aquí
  const unsplashApiKey = 'WXVqVjHFbsbKIOnMeq5dU4IPPKAODURgphCf77NxXys';

  async function obtenerImagenDeUnsplash() {
      try {
          const response = await fetch(`https://api.unsplash.com/search/photos?query=maths&client_id=${unsplashApiKey}`);
          const data = await response.json();
  
          if (data.results && data.results.length > 0) {
              // Obtén una imagen aleatoria del primer resultado
              const randomIndex = Math.floor(Math.random() * data.results.length);
              const imageUrl = data.results[randomIndex].urls.full;
  
              // Cambia el fondo de la aplicación con la imagen obtenida
              document.body.style.backgroundImage = `url(${imageUrl})`;
          }
      } catch (error) {
          console.error('Error al obtener imagen de Unsplash:', error);
      }
  }
  
  // Llama a la función para obtener una imagen al cargar la página
  obtenerImagenDeUnsplash();
  



    
        

     
