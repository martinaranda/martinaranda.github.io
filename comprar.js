function myFunction(){
  const ticket = 200;
  let cantidad =  document.getElementById("quantity").value;
  let categoria = document.getElementById("category");
  let opciones = categoria.options[categoria.selectedIndex].text;
  let valor = 0;
  let numero = parseInt(cantidad);
  
  if (isNaN(numero)){
      alert("Ingresar cantidad y categoría de tickets");
  } else {
      switch (opciones){
             case "Seleccionar":
                  alert("Debe seleccionar una categoría válida")
                  break;
             case "Estudiante":
                  valor= parseInt(cantidad) * ticket * 0.2 ;
                  document.getElementById("totales").innerHTML="Total a Pagar: $" + valor;
                  break;
            case "Trainee":
                 valor = parseInt(cantidad) * ticket * 0.5; 
                 document.getElementById("totales").innerHTML="Total a Pagar: $" + valor;
                 break;
           case "Junior":
                 valor = parseInt(cantidad) * ticket * 0.85; 
                 document.getElementById("totales").innerHTML="Total a Pagar: $" + valor;
                 break;
           default:
                 break;
      }
 }
}

