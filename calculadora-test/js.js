document.addEventListener("DOMContentLoaded", capturarClick);

//La idea es realizar primero las multipicaciones o divisiones para luego con ese resultado sumar o restar.

// Capturar el evento click
function capturarClick() {
  if (!teclas) return;
  teclas.addEventListener("click", (e) => {
    const tecla = e.target;
    const valorTecla = tecla.dataset;
    pintaDisplay(valorTecla);
    obtenerResultado(valorTecla);
  });
}

// Inicializamos el display
display.value = "0";
// Evaluamos si estamos operando
let statusOper = false;

let resultadoMulDiv;
let currentOp = "";
let previousOp = "";
let ultimoChar;

//Lógica para pintar las entradas en el display//
const pintaDisplay = (data) => {
  //Desestructuramos la data
  const { num, op, cl } = data;
  //Restringimos la cadena a 30 caracteres
  if (display.value.length === 30) return;
  // Borramos el cero al comenzar a pintar datos
  if (display.value === "0") display.value = "";
  // Borrar display
  if (cl) {
    display.value = "0";
    previousOp = "";
    currentOp = "";
  }
  // Guardamos el último caracter
  ultimoChar = display.value.charAt(display.value.length - 1);
  //Comprobamos que no se ingrese más de un operador seguido
  if (
    ultimoChar === "+" ||
    ultimoChar === "-" ||
    ultimoChar === "*" ||
    ultimoChar === "/" ||
    ultimoChar === "x²" ||
    ultimoChar === "√"
  )
    display.value = display.value;
  //Agregamos operadores al display
  else if (op) display.value += op;
  //Agregamos operando al display
  if (num) display.value += num;
};

// Logica para obtener el resultado y pintarlo
const obtenerResultado = (data) => {
  //Desestructuramos la data
  const { num, op, cl} = data;
console.log(cl)
  if (num || (currentOp === "" && previousOp === "")) {
    currentOp += num;
  } else if (op !== undefined && previousOp === "") {
    previousOp = currentOp;
    currentOp = "";
  }
  else if (num || (currentOp === "" && previousOp !== "")) {
    currentOp += num;   
  } else if (op=== '*' || op==='/' && currentOp !== "" && previousOp !== "") {
    switch (op) {
      case "*":
        resultadoMulDiv = Number(previousOp) * Number(currentOp);
        break;
      case "/":
        resultadoMulDiv = Number(previousOp) / Number(currentOp);
        break;

      default:
        break;
    }
  }

  console.log("previo " + previousOp);
  console.log("actual " + currentOp);
  
    
  // }

  console.log(resultadoMulDiv);

  // switch (op) {
  //   case "*":
  //     console.log(Number(ultimoChar * num));
  //     break;

  //   default:
  //     break;
  // }
};
