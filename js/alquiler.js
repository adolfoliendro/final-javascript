// Clase Alquiler
class Alquiler {
  constructor(id, direccion, tipo, precio, moneda) {
    this.id = parseInt(id);
    this.direccion = direccion.toUpperCase();
    this.tipo = tipo.toUpperCase();
    this.precio = parseInt(precio);
    this.moneda = moneda;
  }
  cambiarMoneda(valorUsd) {
    if (this.moneda == "ARS") {
      this.precio = parseInt(this.precio / valorUsd);
      this.moneda = "USD";
    } else {
      this.precio = parseInt(this.precio * valorUsd);
      this.moneda = "ARS";
    }
  }
}
