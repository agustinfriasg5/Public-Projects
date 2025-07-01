window.addEventListener("DOMContentLoaded", function() {
    const selectTipo = document.getElementById("tipo");
    const inputPesos = document.getElementById("pesos");
    const inputCotizacion = document.getElementById("coti");
    const form = document.querySelector("form");
    const resultado = document.getElementById("dolares");
    const tipoDolar = {
        of: "oficial",
        bl: "blue",
        bo: "bolsa",
        cr: "cripto",
        ta: "tarjeta"
    };
    function obtenerCotizacion() {
        const tipoSeleccionado = tipoDolar[selectTipo.value];
        fetch(`https://dolarapi.com/v1/dolares/${tipoSeleccionado}`)
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(datos) {
                inputCotizacion.value = datos.venta;
            })
            .catch(function(error) {
                alert("Ocurrió un error al obtener la cotización.");
                console.error(error);
            });
    }
    selectTipo.addEventListener("change", function() {
        obtenerCotizacion();
    });
    form.addEventListener("submit", function(calcular) {
        calcular.preventDefault();
        let pesos = parseFloat(inputPesos.value);
        let cotizacion = parseFloat(inputCotizacion.value);
        if (pesos === 0 ) {
            alert("Debe ingresar un monto mayor que 0.");
        } else if (cotizacion === 0 ) {
            alert("Debe haber una cotización válida.");
        } else {
            let dolares = pesos / cotizacion;
            resultado.textContent = "Dólares Comprados: u$s " + dolares.toFixed(2);
        }
    });
    obtenerCotizacion();
});
