/*Ejercicio
vamos a pedir al usuario que ingrese la cantidad alumnos a los cuales les asignará una nota, luego de que ingrese la catidad de notas de cada alumnos, se va a desplegar un menú.
las opciones del menú serán la siguentes:
1.- mostrar el promedio de notas
2.- mostrar si la nota es aprobatoria o reprobatoria
3.- mosatrar si la nota está por sobre o por debajo del promedio del curso

*/

/*
¿Qué es lo que tenemos que hacer?
1.- definir array *
2.- pedir la cantidad de alumnos *
3.- solicitar las notas de cada alumnos y guardarlas en un array *
4.- saber cual es la nota aprobatoria * 
5.- validar la cantidad de notas sea la correcta (limites de notas)* y definir notas válidas*
6.- hacer una funcion por cada opcion del menú 
7.- crear el menú 
8.- definir cuando termina el menú 
9.- definir el promedio del curso
*/

const notas = [];
const notaAprobatoria = 4.0;

//le pedimos la cantidad de alumnos al usuario

let cantAlumnos = 0;

do{
  cantAlumnos = prompt("Ingrese numero de Alumnos: ").trim();
  cantAlumnos = parseInt(cantAlumnos);
  
  if(isNaN(cantAlumnos)){
    console.log("Debes ingresar un número válido");
  }

  if(cantAlumnos < 1 || cantAlumnos > 4){
    console.log("Debes ingresar un numero de 1 a 4")
  }
  
  
}while( isNaN(cantAlumnos) || cantAlumnos < 1 || cantAlumnos > 4 )

//vamos a pedir una nota por cada alumno
for (let i = 1; i <= cantAlumnos ; i++){
  //definimos la variable en donde guardaremos la nota
  let notaAlumno=0;
  //se declara un do...while para verificar que el valor de la nota está entre 1 y 7 y es correcto
  do{
    notaAlumno = parseFloat(prompt("Ingrese nota de Alumno "+i+": "));
    
    
  }while(notaAlumno>7 || notaAlumno<1 || notaAlumno.length == 0 || isNaN(notaAlumno));
  //Se ingresa la nota en nuestro arreglo predefinido
  notas.push(notaAlumno);
}


/*Funciones del menú */


//console.log(promedioNotaCurso);

function promedioNotas(arregloNotas){
  let suma = 0;
  for(let i = 0; i < arregloNotas.length; i++){
    suma = suma + arregloNotas[i];
  }
  return suma/arregloNotas.length;
}



function aprobadoReprobado(notaAprobatoria,arregloNotas){
  for(let i = 0; i < arregloNotas.length; i++){
    
    if(arregloNotas[i] >= notaAprobatoria){
      console.log("El alumno n°"+(i+1)+" es: "+arregloNotas[i]+" -> Aprobado")
    }else{
      console.log("El alumno n°"+(i+1)+" es: "+arregloNotas[i]+" -> Reprobado")
    }
    
  }
}

function sobrePromedio(promedioCurso,arregloNotas){
  for(let i = 0; i < arregloNotas.length; i++){

    if(arregloNotas[i]>promedioCurso){
      console.log("El alumno n°"+(i+1)+" obtuvo una nota de '"+arregloNotas[i]+"' por lo tanto está sobre el promedio "+promedioCurso);
    }else if( arregloNotas[i] == promedioCurso){
      console.log("El alumno n°"+(i+1)+" obtuvo una nota de '"+arregloNotas[i]+"' por lo tanto es igual al promedio "+promedioCurso);
    }else{
      console.log("El alumno n°"+(i+1)+" obtuvo una nota de '"+arregloNotas[i]+"' por lo tanto está bajo el promedio "+promedioCurso);
    }

  }
}
/*
console.log("\n");
console.log("===========================");
console.log("==== Comienzo del Menú ====");
console.log("===========================");
console.log("\n");
*/
let opcion = 1;

while( opcion != 0){
  


  do{

    console.log("\n");
console.log("===========================");
console.log("==== Comienzo del Menú ====");
console.log("===========================");
console.log("\n");

    console.log("Bienvenido/a ");
    console.log("Seleccione 1 si quiere obtener el promedio de las notas del curso");
    console.log("Seleccione 2 si quiere saber quién aprueba o no en el curso");
    console.log("Seleccione 3 si quiere saber quién está sobre, igual o bajo el promedio de las notas del curso");
    console.log("Seleccione 0 si quiere salir");
    console.log("\n");
    opcion = parseInt(prompt("Ingrese una opción "));

    
    
  }while(opcion < 0 || opcion > 3)
  if(opcion == 1){
      console.log("\n");
      console.log("Has ingresado la opción 1");
      let promedioNotaCurso = promedioNotas(notas);
      console.log("\n");
      console.log("=================================================================");
      console.log("El promedio de las notas del curso es de: "+promedioNotaCurso);
      console.log("=================================================================");
      console.log("\n");
    }else if(opcion == 2){
      console.log("\n");
      console.log("Has ingresado la opción 2");
      console.log("\n");
      console.log("=================================================================");
      aprobadoReprobado(notaAprobatoria,notas)
      console.log("=================================================================");
      console.log("\n");
    }else if(opcion == 3){
      console.log("\n");
      console.log("Has ingresado la opción 3");
      let promedioNotaCurso = promedioNotas(notas);
      console.log("\n");
      console.log("=================================================================");
      sobrePromedio(promedioNotaCurso,notas)
      console.log("=================================================================");
      console.log("\n");
    }else if(opcion == 0){
      console.log("\n");
      console.log("Has ingresado la opción 0");
      console.log("Hasta luego");
      console.log("\n");  
    }else{
      console.log("\n");
    }
  
  
}










