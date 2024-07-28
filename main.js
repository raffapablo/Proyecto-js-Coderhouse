
                                     /* BIENVENIDA Y RECOPILACION DE DATOS */
 
 function newUser () {
    let saludar = confirm('¡Bienvenido! si es la primera vez que compra en Palo y a la Bolsa; ingrese su: \n\n -Nombre \n\n -Apellido \n\n -DNI')
    let nombre = ''
    let apellido = ''
    let dni = 0
        
        if (saludar == true){
            nombre = prompt('Ingrese su nombre:')
            apellido = prompt('ingrese su apellido')
            dni = parseInt(prompt ('ingrese su dni sin puntos, espacios ni guiones:'))
            const confirmar = confirm('Confirme los siguientes datos: \n\n Nombre: ' + nombre + '\n Apellido: ' + apellido + '\n Dni: ' + dni)
                if(confirmar == true){
                    const gracias = alert ('Gracias ' + nombre + ', para realizar tu primer compra presiona el boton "Comprar productos"')
                }
                else {
                    while(confirmar == false){
                    const deNuevo = confirm ('Ok, vamos de nuevo')
                           if(deNuevo == true)  {
                                nombre = prompt('Ingrese su nombre:')
                                apellido = prompt('ingrese su apellido')
                                dni = parseInt(prompt ('ingrese su dni sin puntos, espacios ni guiones:'))
                                confirmar = confirm('Confirme los siguientes datos: \n\n Nombre: ' + nombre + '\n Apellido: ' + apellido + '\n Dni: ' + dni)
                                gracias = alert ('Gracias ' + nombre + ', para realizar tu primer compra presiona el boton "Comprar productos"')
                            } 
                            else {
                             alert('Vuelva cuando guste.')
                              }
                            break
                }
                }
        }
        else{
            const vuelvaCunadoGuste = alert ('Ok, cuando quiera puede registrarse presionando el boton "Crear cuenta"')
        }
    }
    /*Profe, en esta parte me cuesta hacer un bucle infinito para que cada vez que el usuario ponga cancelar se reactive la funcion de ingresar los datos. mire las clases y busque informacion pero no me termina de quedar bien y sinceramente, no quiero que chat gpt me genere el codigo. */
                    /*le agradeceria si me podria dejar un ejemplo en la devolucion o poder verlo en clase. Muchas gracias */
    /*Tambien queria decirle que no se si es una buena practica meter un if dentro de otro if, pero es la unica forma en la que pude hacer que dentro de todo tenga una buena funcionalidad con el usuario */
    /*Desde ya le pido disculpas si es una burrada lo que hice.*/

    const productos = ["\n\n 1) Polietileno ($300 c/u)" , " \n\n 2) Papel madera ($350 c/u)" , '\n\n 3) Residuos ($400 c/u)' , '\n\n 4) Friselina ($450 c/u)' , '\n\n 5) Arranque ($500 c/u)' ,]
    const polietileno = 300
    const papelMadera = 350
    const residuos = 400
    const friselina = 450
    const arranque = 500
    let  cantidad = 0
    let producto = 0
    let total = 0

    pago = (producto, cantidad) =>{
        cantidad = parseInt(prompt('¿que cantidad de bolsas de polietileno desea llevar?'))
        total = producto * cantidad
        alert('¡GRACIAS POR SU COMPRA! \n\n su total es de $' + total)
    }

    function compra(){
        producto = parseInt(prompt ('¿Que desea comprar? Ingrese un valor numerico del 1 al 5' + productos))

        switch(producto){
            case 1:
                 pago(300, cantidad)
                break
            case 2:
                pago  (350, cantidad)
                break
            case 3:
                pago  (400, cantidad)
                break
            case 4:
                pago  (450, cantidad)
                break
            case 5:
                pago  (500, cantidad)
                break
            default:
             const datoIncorrecto =  alert('No ingreso un dato correcto.\n\n\n Recuerde ingresar un numero del 1 al 5 \n presione nuevamente el boton de "comprar productos" ')
                break
            }
        
    }