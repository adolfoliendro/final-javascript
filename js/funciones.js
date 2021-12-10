// Funcion que lista en el HTML un array de alquileres
function listarEnHtml(arrayDeAlquiler) {
  for (const alquiler of arrayDeAlquiler) {
    $("#publicaciones").append(`
    <tr>
      <th scope="row">${alquiler.id}</th>
      <td>${alquiler.direccion}</td>
      <td>${alquiler.tipo}</td>
      <td>${alquiler.precio}</td>
      <td>${alquiler.moneda}</td>
    </tr>
    `);
  }
}

// Evento asociado al envio del formulario
let resultados = [];
$("#formulario").on("submit", function (event) {
  event.preventDefault();
  $("#publicaciones").empty();
  if (event.originalEvent.submitter.id == "botonAplicarFiltros") {
    $("#publicaciones").empty();
    resultados = [];
    // Filtrar por precio min y max
    resultados = $.grep(alquileresClase, function (elemento) {
      if (elemento.moneda == $("[name=tipoMoneda]:checked").val()) {
        return (
          $("#min").val() <= elemento.precio &&
          elemento.precio <= $("#max").val()
        );
      } else {
        elemento.cambiarMoneda(PRECIO_USD);
        return (
          $("#min").val() <= elemento.precio &&
          elemento.precio <= $("#max").val()
        );
      }
    });
    // Filtrar por tipo de vivienda
    resultados = $.grep(resultados, (elemento) =>
      [elemento.tipo, "TODOS"].includes($("[name=tipoVivienda]:checked").val())
    );
  } else {
    resultados = alquileres;
  }
  // Listar los resultados
  listarEnHtml(resultados);
});

// Botones
$("#mostrarFiltros").on("click", function () {
  $("#formulario").slideDown("slow");
});

$("#ocultarFiltros").on("click", function () {
  $("#formulario").slideUp("slow");
});

$("#modoClaro").on("click", function () {
  $("body, .table").css({
    "background-color": "white",
    color: "black",
  });
});

$("#modoOscuro").on("click", function () {
  $("body, .table").css({
    "background-color": "black",
    color: "white",
  });
});