const contenedorId = document.querySelector(".container-id-tarea");
const input = document.getElementById("input");
const boton = document.getElementById("boton");
const totalConteo = document.querySelector(".total");
const realizadosConteo = document.querySelector(".realizadas");
let arrayTareas = [];

boton.addEventListener("click", () => {
    const objetoTarea = { 
        id: Date.now(), 
        tarea: input.value
    };
    arrayTareas.push(objetoTarea);
    input.value = "";

    actualizarTareas();
});

function borrar(id) {
    const index = arrayTareas.findIndex((ele) => ele.id == id);
    arrayTareas.splice(index, 1);
    actualizarTareas();
}

function actualizarTareas() {
    let html = "";
    for (const tarea of arrayTareas) {
        html += `
            <div class="tarea">
                <span class="id">${tarea.id}</span>
                <span class="tarea">${tarea.tarea}</span>
                <input type="checkbox" class="checkbox" onchange="actualizarRealizados()">
                <button class="button" onclick="borrar(${tarea.id})">Eliminar</button>
            </div>
        `;
    }
    contenedorId.innerHTML = html;

    totalConteo.textContent = arrayTareas.length;
}

function actualizarRealizados() {
    const checkboxes = document.querySelectorAll('.checkbox');
    let contadorRealizados = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            contadorRealizados++;
        }
    });
    realizadosConteo.textContent = contadorRealizados;
}


