/*const cajaUno = document.getElementById("caja1");
cajaUno.addEventListener("click", function(){
    caja1.style.backgroundColor = "black";
    });

const cajaDos = document.getElementById("caja2");
cajaUno.addEventListener("click", function(){
caja1.style.backgroundColor = "black";
});

const cajaTres = document.getElementById("caja3");
cajaUno.addEventListener("click", function(){
caja1.style.backgroundColor = "black";
});

const cajaCuatro = document.getElementById("caja4");
cajaUno.addEventListener("click", function(){
caja1.style.backgroundColor = "black";
});*/

//asi hice el primero. 

//segundo

/*const cajaUno = document.getElementById("caja1");
const cajaDos = document.getElementById("caja2");
const cajaTres = document.getElementById("caja3");
const cajaCuatro = document.getElementById("caja4");

cajaUno.addEventListener("click", function(){
    cajaUno.style.backgroundColor = "black";
});
cajaDos.addEventListener("click", function(){
    cajaDos.style.backgroundColor = "black";
});
cajaTres.addEventListener("click", function(){
    cajaTres.style.backgroundColor = "black";
});
cajaCuatro.addEventListener("click", function(){
    cajaCuatro.style.backgroundColor = "black";
});*/

//version final. 

const todasLasCajas = document.querySelectorAll(".caja") //selecciono la clase, qque es la misma para todas
todasLasCajas.forEach(caja => {
    caja.addEventListener("click", function() {
        caja.style.backgroundColor = "black";
    });
})