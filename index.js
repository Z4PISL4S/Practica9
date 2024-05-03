for (let x=0; x < 5; x++){
    if(X==2)
        continue;
    console.log("x");
}

let a = 10;
a = a + 5;
a -= 5;

let x = 10;
x *= 5;
console.log(x);

//Tipo fecha
const fecha = new Date();
console.log(fecha);

function myFunction(p1, p2){
    return p1 * p2;
}

console.log(myFunction(5, 10));
console.log(myFunction());
console.log(myFunction(8));
console.log(myFunction);

function otraFuncion(a, b){
    return a * b;
}

//funcion flecha 
const otraFuncion = (a, b) => a * b
console.log(otraFuncion(5,1))

//Funcion autoejecutables 
//Funcion anonima 
(function(){
    console.log('Es función anónima autoejecutable')
})();

//Funcion autoejecutable flecha
(() => console.log('Es función anónima autoejecutable'))

let alumno = {
    nombre : "Diego",
    Apellido : "Castañeda",
    Matricula : 80039,
    nombreCompleto : function() {
        return this.nombre + ''   
    } 
}
