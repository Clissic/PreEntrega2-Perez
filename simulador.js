/* do {
  option = parseInt(
    prompt(
      "SIMULADORES:\n1 - Calcular IMC. \n2 - Calcular intereses de préstamo. \n3 - Convertidor de °C a °F. \n4 - Salir. \nIngrese la opcion:"
    )
  );
  switch (option) {
    case 1:
      let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
      let altura = parseFloat(prompt("Ingrese su altura en metros:"));
      let resultado;

      alert(imc(peso, altura));

      function imc(valor1, valor2) {
        resultado = valor1 / (valor2 * valor2);

        if (resultado <= 18.5) {
          return "Tu peso es inferior al normal, tu IMC es " + resultado;
        } else if ((resultado > 18.5) & (resultado <= 24.9)) {
          return "Tu peso es normal.\nTu IMC es: " + resultado;
        } else if ((resultado > 24.9) & (resultado <= 29.0)) {
          return "Tu peso es superior al normal.\nTu IMC es: " + resultado;
        } else if (resultado > 29.0) {
          return "Tienes obesidad.\nTu IMC es: " + resultado;
        } else {
          return "Ingresaste mal los datos.";
        }
      }
      break;
    case 2:
      let moneda = prompt(
        "Ingrese en que moneda quiere el resultado (ej.: U$, AR%, US$, etc.):"
      );
      let monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
      let tasa = parseFloat(
        prompt("Ingrese la tasa de interes anual en porcentaje:")
      );
      let cuotas = parseFloat(prompt("Ingrese numero de años a pagar:"));

      alert(tasaInteres(moneda, monto, tasa, cuotas));

      function tasaInteres(valorMoneda, valor1, valor2, valor3) {
        interes = parseFloat(valor1 * (valor2 * 0.01) * valor3);

        return "El interés a pagar es de " + interes + " " + valorMoneda;
      }
      break;
    case 3:
      let celcius = parseFloat(prompt("Ingrese temperatura en °C:"));
      let fahrenheit;

      alert(convertidor(celcius));

      function convertidor(valor1) {
        fahrenheit = valor1 * (9 / 5) + 32;
        return celcius + " °C corresponden a " + fahrenheit + " °F";
      }
      break;
  }
} while (option != 4);
alert("Hasta luego..."); */

    //Función CONSTRUCTORA
    function Producto(recomendado, masVendido, novedad, categoria, tipo, color, marca, precio, talle, sexo, edad) {
      this.recomendado = recomendado;
      this.masVendido = masVendido;
      this.novedad = novedad;
      this.categoria = categoria;
      this.tipo = tipo;
      this.color = color;
      this.marca = marca;
      this.precio = precio;
      this.talle = talle;
      this.sexo = sexo;
      this.edad = edad;
  
      
      // Metodo
      this.descuentoIva = function(precio) {
          this.precio = precio - (precio * 0.21)
          console.log("Este " + this.tipo + " con el descuento del IVA cuesta ahora " + this.precio)
      }
  }
  
  let arrayCounter = 0  
  arrayName = "prod" + arrayCounter
  let crearProducto = document.getElementById("crearProductoId")
  crearProducto.addEventListener("click", respuestaClick)
  function respuestaClick() {
  
      let recomendado = document.getElementById("recomendadoId").value
      let masVendido = document.getElementById("masVendidoId").value
      let novedad = document.getElementById("novedadId").value
      let categoria = document.getElementById("categoriaId").value
      let tipo = document.getElementById("tipoId").value
      let color = document.getElementById("colorId").value
      let marca = document.getElementById("marcaId").value
      let precio = parseFloat(document.getElementById("precioId").value)
      let talle = document.getElementById("talleId").value
      let sexo = document.getElementById("sexoId").value
      let edad = document.getElementById("edadId").value
  
      let arrayName = new Producto(recomendado,masVendido,novedad,categoria,tipo,color,marca,precio,talle,sexo,edad)

      console.log(arrayName)

      const tableItems = document.getElementById("tableItems")
      tableItems.innerHTML += 
        `
        <td>${categoria}</td>
        <td>${tipo}</td>
        <td>${color}</td>
        <td>${marca}</td>
        <td>$${precio}</td>
        <td>${talle}</td>
        <td>${sexo}</td>
        <td>${edad}</td>
        `

      arrayCounter++
  }