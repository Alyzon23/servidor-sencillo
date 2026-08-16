// math.js - Función central a proteger
export function calcularDescuento(precioBase, PorcentajeDescuento) {
  if (typeof precioBase !== 'number' || typeof PorcentajeDescuento !== 'number') {
    throw new Error('Los parámetros deben ser números válidos');
  }
  if (precioBase < 0 || PorcentajeDescuento < 0 || PorcentajeDescuento > 100) {
    throw new Error('Valores fuera del rango permitido');
  }
  return precioBase - (precioBase * (PorcentajeDescuento / 100));
}
