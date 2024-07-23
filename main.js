/*
function compra (){
let articulos = parseInt(prompt ('que desea comprar? 1:remeras / 2:pantalones /3:camperas'))
let pantalones = 1000
let remeras = 2000


    switch (articulos) {
        case 1:
             cantidadDeArticulos = (parseInt(prompt ('que cantidad va a llevar?')))
            alert ('Gracias por su compra. Su monto a abonar es de $'+ cantidadDeArticulos * pantalones)
            break;
            case 2:
                 cantidadDeArticulos = (parseInt(prompt ('que cantidad va a llevar?')))
                alert ('Gracias por su compra. Su monto a abonar es de $'+ cantidadDeArticulos * remeras)
                break;
                case 3:
                    cantidadDeArticulos = (parseInt(prompt ('que cantidad va a llevar?')))
                    alert ('Gracias por su compra. Su monto a abonar es de $'+ cantidadDeArticulos * camperas)
                    break;
    
        default:
            alert('el monto ingresado es erroneo')
            break;
    }
}
*/
// function compra (){
//     let elegirProducto = prompt ('Que desea comprar?');
//     switch (elegirProducto){
//         case 'hola':
//             alert('daleeee de una ahi va')
//           break
                
//                 default: 
//                 alert ('ah ')
//     } 
// }



            
        //  cantidad = parseInt(prompt ('Que cantidad de bolsas de papel madera desea llevar?' ))
        //  total = alert('Gracias por su compra, su total es de $' + papelMadera * cantidad)
        // break

        // case '3':
        //      cantidad = parseInt(prompt ('Que cantidad de bolsas de residuos desea llevar?' ))
        //      total = alert('Gracias por su compra, su total es de $' + residuos * cantidad)
        //     break

        //     case '4':
        //  cantidad = parseInt(prompt ('Que cantidad de bolsas de friselina desea llevar?' ))
        //  total = alert('Gracias por su compra, su total es de $' + friselina * cantidad)
        // break

        // case '5':
        //  cantidad = parseInt(prompt ('Que cantidad de bolsas de arranque desea llevar?' ))
        //  total = alert('Gracias por su compra, su total es de $' + arranque * cantidad)

        // break

        // default:
        //     alert('el valor ingresado es incorrecto. \n recuerde que debe ingresar un valor numerico del 1 al 5')
        


                                     /* BIENVENIDA */
let saludar = confirm('¡Bienvenido! si es la primera vez que compra en Palo y a la Bolsa; ingrese su: \n\n -Nombre \n\n -Apellido \n\n -DNI')
                                     /*ARRAY DE PRODUCTOS Y VALORES DE LOS MISMOS*/
const productos = ["\n\n 1) Polietileno ($300 c/u)" , " \n\n 2) Papel madera ($350 c/u)" , '\n\n 3) Residuos ($400 c/u)' , '\n\n 4) Friselina ($450 c/u)' , '\n\n 5) Arranque ($500 c/u)' ,]
const polietileno = 300
const papelMadera = 350
const residuos = 400
const friselina = 450
const arranque = 500
                                    /*RECOPILACION DE DATOS */


if (saludar == true) {

    let nombre = prompt('Ingrese por favor su nombre:')
    let apellido = prompt('Ingrese por favor su apellido:')
    let dni = parseInt (prompt('Ingrese por favor su dni:'))
    const confirmar = alert('Hola '+ nombre + ', gracias por registrarte, por favor confirma los siguientes datos: \n -Nombre: '+ nombre + '\n -Apellido: ' + apellido + '\n -DNI: ' + dni )
    let gracias = alert ('Gracias ' + nombre + ', para realizar tu primer compra presiona el boton "Comprar productos"') 
                          /* este console.log() tiene la unica funcion de cumplir con las consignas de la pre-entrega*/ 
    console.log(nombre  + '\n' + apellido + '\n' + dni)   
}   
else {

     alert ('No hay problema, vuelva cuando guste. \n\n -Si fue un error y desea comprar en este momento, solo refresque la tienda web (F5) \n\n -Si presiona "aceptar" podra seguir navegando por la tienda, gracias.')
} 


                                 /* FUNCION CARRITO DE COMPRAS Y CALCULADOR DE PRECIO FINAL*/
function compra(){
    const polietileno = 300
    const papelMadera = 350
    const residuos = 400
    const friselina = 450
    const arranque = 500
    cantidad = 0
    let producto = parseInt(prompt ('¿Que desea comprar? Ingrese un valor numerico del 1 al 5' + productos))
    switch(producto){
        case 1:
            cantidad = parseInt(prompt('¿que cantidad de bolsas de polietileno desea llevar?'))
            alert('¡GRACIAS POR SU COMPRA! \n\n su total es de $' + polietileno * cantidad + '\n Para poder abonar su compra presione el boton "pagar"')
            total = polietileno *cantidad
            break
        case 2:
            cantidad = parseInt(prompt('¿que cantidad de bolsas de papel madera desea llevar?'))
            alert('¡GRACIAS POR SU COMPRA! \n\n su total es de $' + papelMadera * cantidad + '\n Para poder abonar su compra presione el boton "pagar"' )
            total = papelMadera * cantidad
            break
        case 3:
            cantidad = parseInt(prompt('¿que cantidad de bolsas de residuos desea llevar?'))
            alert('¡GRACIAS POR SU COMPRA! \n\n su total es de $' + residuos * cantidad + '\n Para poder abonar su compra presione el boton "pagar"' )
            total = residuos *cantidad
            break
        case 4:
            cantidad = parseInt(prompt('¿que cantidad de bolsas de friselina desea llevar?'))
            alert('¡GRACIAS POR SU COMPRA! \n\n su total es de $' + friselina * cantidad + '\n Para poder abonar su compra presione el boton "pagar"' )
            total = friselina *cantidad
            break
        case 5:
            cantidad = parseInt(prompt('¿que cantidad de bolsas de arranque desea llevar?'))
            alert('¡GRACIAS POR SU COMPRA! \n\n su total es de $' + arranque * cantidad + '\n Para poder abonar su compra presione el boton "pagar"' )
            total = arranque * cantidad
            break

        default:
            alert('No ingreso un dato correcto.\n\n\n Recuerde ingresar un numero del 1 al 5 \n presione nuevamente el boton de "comprar productos" ')
    }
    
}

let mercadoPago = 1.06
let debito = 1.10
let efectivo = 1
let transferencia = 1.2
const pagar = () => {
    let monto = 0
   let formaDePago = prompt('Seleccione su metodo de pago: \n\n -Efectivo (mismo precio) \n -Debito (10% de recargo) \n -Mercado pago (6% de recargo) \n -Transferencia (20% de DESCUENTO)')
                                /*tolowercase para minimizar errores*/
   formaDePago.toLocaleLowerCase
   switch(formaDePago){
    case 'efectivo':
        monto = parseInt(prompt ('Ingrese el monto de su compra'))
        alert ('Su pago a abonar es de $' + monto * efectivo)
        break
    case 'debito':
         monto = parseInt(prompt ('Ingrese el monto de su compra'))
        alert ('Su pago a abonar es de $' + monto * debito)
        break
    case 'mercado pago':
        monto = parseInt(prompt ('Ingrese el monto de su compra'))
        alert ('Su pago a abonar es de $' + monto * mercadoPago)
        break
    case 'transferencia':
         monto = parseInt(prompt ('Ingrese el monto de su compra'))
        alert ('Su pago a abonar es de $' + monto / 100 * 80)
        break
    default: alert ('Error \n Ingrese nuevamente el monto y la forma de pago \n\n\n En este punto NO debe escribir un caracter numerico del 1 al 5 si no que debe escribir la opcion deseada \n Ejemplo: "efectivo" ')
    
   }
}




