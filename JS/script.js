const sumarNotas = () =>{
    let nombre = String(prompt("Ingrese nombre del alumno"))
    let nota1 = parseFloat(prompt("Ingrese primer nota"))
    let nota2 = parseFloat(prompt("Ingrese segunda nota"))
    let nota3 = parseFloat(prompt("Ingrese tercer nota"))
    let promedio = (nota1+ nota2+ nota3)/3;
    return "El alumno es: " + nombre + " " + "y sus notas son: " + nota1 + ", " +  nota2 + ", " + nota3 +  "\n" +  "Su promedio es: " + Math.round(promedio);
}

alert(sumarNotas());
