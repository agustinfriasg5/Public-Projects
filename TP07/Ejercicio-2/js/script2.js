const CAPACIDAD_TANQUE = 50;
const KM_POR_LITRO = 14;

let litrosRestantes = CAPACIDAD_TANQUE;
let cantidadViajes = 0;
const seccionViajes = document.getElementById("viajes");
const totalViajes = document.getElementById("total");
while (litrosRestantes > 5) {
    let kmRecorridos = prompt("Ingrese los km recorridos en este viaje:");
    if (kmRecorridos === null || kmRecorridos.trim() === "") {
        alert("Cancelado o sin datos. Se detiene el registro de viajes.");
        break;
    }
    kmRecorridos = parseFloat(kmRecorridos);
    if (kmRecorridos <= 0) {
        alert("Por favor, ingrese un número válido mayor a 0.");
    } else {
        let litrosConsumidos = kmRecorridos / KM_POR_LITRO;
        litrosRestantes = litrosRestantes - litrosConsumidos;
        cantidadViajes = cantidadViajes + 1;
        const p = document.createElement("p");
        p.textContent = `Viaje ${cantidadViajes}: ${kmRecorridos.toFixed(2)} km - ${litrosConsumidos.toFixed(2)} L consumidos - ${litrosRestantes.toFixed(2)} L restantes`;
        seccionViajes.appendChild(p);
        if (litrosRestantes <= 5) {
            alert("¡Atención! El tanque está en reserva. Debe ir a la estación de servicio.");
        }
    }
}

totalViajes.textContent += cantidadViajes;
