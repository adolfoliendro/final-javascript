// Lee los datos del archivo datos.json usando ajax
// Usa la api del dolar blue para almacenar el valor de conversion a ARS
const URL = "./js/datos.json";
const URL_USD = "https://api.bluelytics.com.ar/v2/latest";
$.ajax({
  dataType: "json",
  url: URL,
  success: function (data) {
    listarEnHtml(data);
    localStorage.setItem("alquileres", JSON.stringify(data));
    fetch(URL_USD)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("PRECIO_USD", data.blue.value_avg);
        $("#precioDolar").html(
          "Precio del dolar: " + data.blue.value_avg + "ARS"
        );
      });
  },
});
