let guardar = document.getElementById("btnGuardar");
let ver = document.getElementById("btnVer");
let borrar = document.getElementById("btnBorrar");
let campoData = document.getElementById("data");
let f = document.getElementsByTagName("form")[0];
const key = "info";


let cont = 1;
let participantes = []; //new Array()
guardar.addEventListener("click",function(event){
    event.preventDefault();
    //nombre de la variable que se quiere almacenar
    /* sessionStorage.setItem(key, campoData.value); */
    console.log(participantes.length);
/*     if (cont!=participantes.length+1){
        cont = participantes.length+1;
    } */
    let nombre = {"id": cont, "firstName": campoData.value};
    console.log("nombre.firstName: ", nombre.firstName);
    console.log("id: ", nombre.id);
    cont++; //contador que aumenta en uno
    participantes.push(nombre) //colocar elemento al final del array
    console.log(participantes); //escribir array en la consola
    JSON.stringify(participantes)


    localStorage.setItem(key, JSON.stringify(participantes))
    /* localStorage.setItem(key, campoData.value);
 */
})

ver.addEventListener("click",function(event){
    event.preventDefault();
    let alert1 = document.getElementsByClassName("alert-success")[0];
   
    if (localStorage.getItem(key)) {
        let tmp = JSON.parse(localStorage.getItem(key));
        participantes= tmp;
        alert1.innerText = "";
        tmp.forEach(element => {
            alert1.innerHTML += `${element.id}.- ${element.firstName} <br/> `;
        });

        /* alert1.innerText = localStorage.getItem(key); */        
        alert1.style.display="block";
        setTimeout(() => {alert1.style.display ="none" }, 10*1000);
    }
   /*  if (sessionStorage.getItem(key)) {
        alert1.innerText = sessionStorage.getItem(key);
        alert1.style.display="block";
        setTimeout(() => {alert1.style.display ="none" }, 5*1000);
    } */
    /*if (sessionStorage.getItem(key)!=null) {
        alert1.innerText = sessionStorage.getItem(key);
        alert1.style.display="block";
        setTimeout(() => {alert1.style.display ="none" }, 5*1000);
    } */
  
})

borrar.addEventListener("click",function(event){
    event.preventDefault();
 /*    sessionStorage.removeItem(key); */
    localStorage.removeItem(key);

})

f.addEventListener("submit",function(event){
    event.preventDefault();
    guardar.click();
})