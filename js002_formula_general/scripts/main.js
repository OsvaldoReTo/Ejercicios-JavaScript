/* let a = parseInt (document.getElementById("campo_a").value);
let b = parseInt (document.getElementById("campo_b").value);
let c = parseInt (document.getElementById("campo_c").value);

let res = document.getElementById("resultado"); 

res.innerHTML = a+c; */

let a = parseInt(document.getElementById("campo_a").value);
let b = parseInt(document.getElementById("campo_b").value);
let c = parseInt(document.getElementById("campo_c").value);

let res = document.getElementById("resultado");

res.innerHTML = 0;

/* FormulaGeneralPositiva */
function formulaGeneralPositiva(a, b, c) {
    let x;
    x = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return x;
}
/* FormulaGeneralNegativa */
function formulaGeneralNegativa(a, b, c) {
    let x;
    x = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    return x;
}

/* Boton formula */
let botonFG = document.getElementById("boton_formula");

botonFG.addEventListener("click", function (e) { /* agregar evento al boton, click es dar click, e es agregar un evento */
    e.preventDefault(); /* cancela el evento por default que hacia ese boton */
    console.log("botonFG click");
    let a = parseInt(document.getElementById("campo_a").value);
    let b = parseInt(document.getElementById("campo_b").value);
    let c = parseInt(document.getElementById("campo_c").value);
        res.innerHTML = "x1: " + formulaGeneralPositiva(a, b, c) + "<br>x2: " + formulaGeneralNegativa(a, b, c);
}); 