var boton = document.getElementById("botonClick");
        var pantalla = document.getElementById("areaPantalla");
        var contador = 0;

		var colores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF8000', '#8000FF', '#0080FF', '#FF0080', '#80FF00', '#008000'];
      var indiceColor = 0;

        boton.onclick = function () {
            contador++;
            pantalla.textContent = contador;
        }

        function mueveReloj(){
		    Ahora = new Date()
		    hora = Ahora.getHours()
		    minuto = Ahora.getMinutes()
		    segundo = Ahora.getSeconds()
		    horaReal = hora + " : " + minuto + " : " + segundo
		    reloj.textContent = horaReal
		    setTimeout("mueveReloj()",1000)
		}
		function cambiar() {
			var caja2 = document.getElementById('reloj');
	
			// Aplicar el color actual y avanzar al siguiente color en la lista
			caja2.style.backgroundColor = colores[indiceColor];
			caja2.style.color = '#342539';
	
			// Incrementar el índice, reiniciándolo si llega al final de la lista
			indiceColor = (indiceColor + 1) % colores.length;
		  }