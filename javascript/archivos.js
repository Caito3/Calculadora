

var array = []
var arrayCuenta = [] 
var arrayOp = []
var arrayUnion = []

var res = 0 
var llevar = 0 
var texto = ""
var a = 0 
var mantenerRes = 1
var op = 0 
var aaa = 0


//Con esta funcion hacemos que se muestren por pantalla los numeros ingresados y los guardamos en un array para luego utilizarlos
function botones(x){
    
    if(arrayUnion.length >=15){
    } else{
    arrayUnion.push(x)
    texto = x 
    
    var totalTexto = document.getElementById("totalTexto")
    var aaa = totalTexto.textContent
    }
    if(aaa.length >= 3){
        totalTexto.style.fontSize="30px"
        totalTexto.style.marginTop="10%"
        aaa += texto
        totalTexto.innerHTML= aaa
    }else{
    aaa += texto
    totalTexto.innerHTML= aaa
    }
    
}


//Hacemos que si se quiere multiplicar o dividir se muestre el resultado y luego se permite continuar
function tam(){
    if(arrayOp.length >1){
    if(arrayOp[arrayOp.length-1] == "x"){
        hacerCuenta()
        hacer()
        operadores('x')
        
    }
    else if(arrayOp[arrayOp.length-1] == "/"){
        
        hacerCuenta()
        hacer()
        operadores('/')
    }
}

}
//Pasamos los datos del array a tipo numericos y agregamos los operadores seleccionados en otro array
function operadores(x){
    
    texto = x
    var totalTexto = document.getElementById("totalTexto")
    var aaa = totalTexto.textContent
    aaa += texto
    totalTexto.innerHTML = aaa

    texto = ""
    
    var totalPrimero = arrayUnion.join('')
    
    array.push(totalPrimero)
    var total = array.join('')
    if(total != ""){
    var total = Number(total)
    arrayCuenta.push(total)
}
    arrayOp.push(x)
    
arrayUnion = []

array = []
    
}
//La funcion que sigue hace que recorramos los arrays y empezemos a realizar las operaciones 
function hacerCuenta(){
    
    
    var i = 0
    var contador = 0 
    var mantener = []
    
    // procesamos el array de operadores para que no haya numeros
    arrayOp = arrayOp.filter(number => number != 3)

    // filtro para evitar errores en el resultado al momento de realizar operaciones combinadas
    if(arrayOp[arrayOp.length - 1] == "x" && arrayOp.length > 1){
        arrayOp.pop()
    }
    else if(arrayOp[arrayOp.length - 1] == "x" && arrayOp.length > 1){
        arrayOp.pop()
    }
    for (op = 0; op < arrayOp.length; op++){
        
        contador = 0 
        //Hacemos la suma en caso de que el operador sea +
        if (arrayOp[op] == "+"){
            
            arrayCuenta = arrayCuenta.filter(number => number >= 0)
        while (a < arrayCuenta.length ){
            
            if (a > 2 && arrayOp[op + 1] == "x"){
                break
            }
            else if (a > 2 && arrayOp[op + 1] == "/"){
                break
            }
            
            res += arrayCuenta[a]
            
            i++
            a++
            contador++
            
            if( a > 2 && arrayOp[op+1] == "-"){
                break
            }
            if (contador >= 2){
                
                break
            }
    }
        }
    //Hacemos la resta en caso que el operador sea -

        if(arrayOp[op] == "-"){
            
            contador = 0 
            arrayCuenta = arrayCuenta.filter(number => number >= 0)
            
            
        while (a < arrayCuenta.length ){
            
            if (a > 2 && arrayOp[op + 1] == "x"){
                break
            }
            else if (a > 2 && arrayOp[op + 1] == "/"){
                break
            }
            if( a > 1){
            
            res = res - arrayCuenta[a]
            i++
            a++
            contador++
            }
            else{
                
            res = -res - arrayCuenta[a]
            i++
            a++
            contador++
            }
            
            if(contador >= 2){
            
                break}
            }
        }
    //Hacemos la multiplicacion en caso que el operador sea x
    if (arrayOp[op] === "x" ){
        
        contador = 0 
        mantener = arrayCuenta.filter(number => number >= 0)
        while(a < mantener.length ){
            
            if(a > 2 && arrayOp[op + 1] == "+"){
                break
            }
            else if (a > 2 && arrayOp[op + 1] == "-"){
                break
            }
            else if (a > 2 && arrayOp[op + 1] == "/"){
                break
            }

            if(a < 1){
                res = mantenerRes
                mantenerRes *= mantener[a]
                res = mantenerRes
            }
            else {
            res *= mantener[a]
            }
            i++
            a++
            contador++
            
            if (contador >= 2){
                break
            }
        }
    
    }
    
    //Hacemos la division en caso que el operador sea /
    if (arrayOp[op] === "/"){
        contador = 0 
        mantener = arrayCuenta.filter(number => number >= 0)
        
        while(a < mantener.length ){
            if(a > 2 && arrayOp[op + 1] == "+"){
                break
            }
            else if (a > 2 && arrayOp[op + 1] == "x"){
                break
            }
            else if (a > 2 && arrayOp[op + 1] == "/"){
                break
            }
            
            mantenerRes = mantener[a]
                
            if ( a < 1){
            
            res = mantenerRes
            
        }
            else {
                
                res /= mantenerRes 
            }

            i++
            a++
            contador++

            if (contador >= 2){
                break
            }
        }
    }
arrayOp[op] = "3"
    }
}
//Mostramos los resultados de las operaciones 
function hacer() {
    var hacer = document.getElementById("totalTexto")
    hacer.innerHTML = res
}
//boton de resetear
function limpiar (){
    window.location.reload()
}
//boton de delete 
function borrar(){
    //borramos en caso de ser operador
    var pas = arrayOp[arrayOp.length-1]
    
        var pas = arrayOp[arrayOp.length-1]
        if(pas == "+", "-","x","/"){
            arrayOp.pop()
            var res = document.getElementById("totalTexto").textContent
            var tra = document.getElementById("totalTexto")
            texto = texto.slice(0 , texto.length - 1)
        }
        //borramos en caso de ser numeros
        arrayUnion.pop()
        var res = document.getElementById("totalTexto").textContent
        var tra = document.getElementById("totalTexto")
        texto = texto.slice(0 , texto.length - 1)

        var pasar = res.toString()
        var ar = Array.from(pasar)
        ar.pop()
        var volver = ar.join("")
        //mostramos
        tra.innerHTML = volver
        
}
//en caso de borrar todos los numeros se reinicia la calculadora
function ver(){
    var a = document.getElementById("totalTexto")
    var a = a.textContent
    if(a == ""){
        res = 0 
    }
}

