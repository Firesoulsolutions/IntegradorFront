var resultado=0;
var descuento=0;

const valorEntrada=200;

//guarda el monto de la cantidad pedida
var cantidad=document.getElementById("cantidadTicket").value;
//guarda el objeto select
const categoria=document.getElementById("selector");
// indica el indice seleccionado 0=estudiante;1=trainee;2=junior
const indice=categoria.selectedIndex;
//guarda el valor de label monto
const monto=document.getElementById("monto").value;




function calcular(){
    switch(indice){
        case 0:
            descuento=Number(0.8);
            resultado=(valorEntrada-(valorEntrada*descuento))*cantidad;
            console.log("el descuento es de :"+ descuento);
            console.log("el resultado es : "+resultado);
            document.getElementById("monto").innerHTML=resultado;
            console.log(monto);
            

        break
        case 1:
            descuento=Number(0.5);
            resultado=(valorEntrada-(valorEntrada*descuento))*cantidad;
            console.log("el descuento es de :"+ descuento);
            console.log("el resultado es : "+resultado);
            document.getElementById("monto").innerHTML=resultado;
            console.log(monto);
            
        break
        case 2:
            descuento=Number(0.15);
            resultado=(valorEntrada-(valorEntrada*descuento))*cantidad;
            console.log("el descuento es de :"+ descuento);
            console.log("el resultado es : "+resultado);
            document.getElementById("monto").innerHTML=resultado;
            console.log(monto);
            
        break;
        default:
            alert("no se eligio ninguna opcion");
    }


}

/*limpia los campos nombre,apellido,mail */
function borrar(){
      
    document.getElementById("compraTicketNombre").value="";
    document.getElementById("compraTicketApellido").value="";
    document.getElementById("compraTicketEmail").value="";
    location.reload();
}   
console.log("cantidad elegida es: "+document.getElementById("cantidadTicket").value); 
console.log("la categoria es: "+categoria);
console.log("el indice elegido es"+indice);
console.log(document.getElementById("monto").innerHTML);
console.log("el monto actual es: "+monto);
console.log(cantidad);


