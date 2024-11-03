const cambioDeColorCaja = document.getElementById("cajaTeclado");

document.addEventListener("keydown", (event) => {
    if (event.key ==="a" || event.key ===  "A") {
        cambioDeColorCaja.style.backgroundColor = "pink";
    }
    else if (event.key === "s" || event.key ===  "S") {
        cambioDeColorCaja.style.backgroundColor = "orange";
    }
    else if (event.key === "d" || event.key ===  "D") {
        cambioDeColorCaja.style.backgroundColor = "lightblue";
    }
});

const contenedor = document.getElementById("container");

document.addEventListener("keydown", (event) => {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.border = "1px solid black";
    nuevoDiv.style.margin = "10px"

    if (event.key ==="q" || event.key === "Q") {
        nuevoDiv.style.backgroundColor ="purple";
    }
    else if (event.key === "w" || event.key === "W") {
        nuevoDiv.style.backgroundColor ="gray";
    }
    else if (event.key === "e" || event.key === "E") {
        nuevoDiv.style.backgroundColor ="brown";
    }
    else {
        return;
    }
    contenedor.appendChild(nuevoDiv);
    

});

