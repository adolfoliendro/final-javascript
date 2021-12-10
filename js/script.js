// Proyecto Final: Sitio de busqueda de alquileres.

// Traer del local storage el json y convertirlo en objeto (arreglo)
const alquileres = JSON.parse(localStorage.getItem("alquileres"));
const PRECIO_USD = parseInt(localStorage.getItem("PRECIO_USD"));

let alquileresClase = [];

alquileres.forEach((element) =>
  alquileresClase.push(
    new Alquiler(
      element.id,
      element.direccion,
      element.tipo,
      element.precio,
      element.moneda
    )
  )
);
