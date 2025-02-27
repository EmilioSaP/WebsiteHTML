console.log("Hola Mundo1!!!1!!1!one") // node script.js  <- poner en new terminal para correr 

let alumno ={
    nombre: "Luis",
    edad: 20,
    imprime(){
        console.log("Me llamo "+ this.nombre + ", y tengo " + this.edad + " años");
    },
};

alumno.imprime();
alumno["edad"]++;
alumno.imprime();

function fun2(){            //tipo de función poco común
    console.log("hola 2");
}

const funcion = (name) => {     //funcion anonima
    console.log("Hola " + name);
}

funcion("Luis")
fun2()