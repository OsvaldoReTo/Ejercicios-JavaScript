let div = document.getElementById("divData");
let mainProds = document.getElementById("mainProductos");
let check1 =document.getElementById("customCheck1");
let check2 =document.getElementById("customCheck2");
let check3 =document.getElementById("customCheck3");
let check4 =document.getElementById("customCheck4");

check1.addEventListener("click", filtrar);
check2.addEventListener("click", filtrar);
check3.addEventListener("click", filtrar);
check4.addEventListener("click",filtrar);

function filtrar(event) {
    console.log(event.target.value);
    let elementos = Array.from(document.getElementsByClassName(event.target.value));
    
    elementos.forEach((e)=>{
        if (event.target.checked) {
            e.style.display = "block";
        } else {
            e.style.display = "none";
        } //if
    });
};

/*  let checking = document.querySelectorAll(".custom-control-input")

checking.forEach((checkbox) =>
    {checkbox.addEventListener("click", function (event) {
    console.log(event.target.value);
    let elementos = Array.from(document.getElementsByClassName(event.target.value));
    
    elementos.forEach((e)=>{
        if (event.target.checked) {
            e.style.display = "block";
        } else {
            e.style.display = "none"
        } //if
    })
})
})  */
/* 
check1.addEventListener("click", function (event) {
    console.log(event.target.value);
    let elementos = Array.from(document.getElementsByClassName(event.target.value));
    
    elementos.forEach((e)=>{
        if (event.target.checked) {
            e.style.display = "block";
        } else {
            e.style.display = "none"
        } //if
    })
}); */

window.addEventListener("load", function(){
    getData();
})
const getData = () => {
   let promesa = fetch ("https://fakestoreapi.com/products/", {
        method : "GET"
    });
    promesa.then( (response) => {
        response.json().then( (data) =>{
            console.log(data);
            console.log(typeof(data));
            data.forEach(producto => {
                //console.log(producto.id, producto.title);
                mainProds.innerHTML += 
                `<div class="${getClassCategory(producto.category)} card col-md-3 col-lg-3 col-xl-3 col- m-4" style="width: 18rem;">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                    <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.category}</p>
                    <p class="card-text">${producto.description.slice(0,100)}...</p>
                    <p class="card-text text-right"><strong> $ ${producto.price} MXN</strong></p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_${producto.id}">
                    <i class="bi bi-eye-fill"></i> Ver más
                    </button>
                    </div>

                    <!-- Modal -->
                    <div class="modal fade" id="modal_${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${producto.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        ${producto.description}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`;
            }); //forEach
            //console.log(data.id, data.title);
            //div.innerHTML = data.title;
        }).catch( (error) =>{
            console.error(error);
        });
    }).catch((error) =>{
        console.log("Error en la solicitud " + error);
    });
} //getData http://127.0.0.1:5500/data.json

function getClassCategory(cat) {
    let c ="";
    switch (cat) {
    case "men's clothing":
        c ="mens";         
        break;
    case "women's clothing":
        c = "women";
        break;
    case "jewelery":
        c = "jew"
        break;
    case "electronics":
        c = "elec"
        break;
    default:
        c="all"
        break;
    } //switch
    return c;
} //getClassCategory