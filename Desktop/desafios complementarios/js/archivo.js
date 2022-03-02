// el usuario elige que producto quiere
let producto = prompt(
  "quieres comprar una camisa ($1500) o un pantalon ($2000)?"
);

// costo total del producto
let costo = 0;

if (producto == "camisa") {
  costo = costo + 1500;
  alert(`el costo del producto es: $${costo}`);
} else {
  costo = costo + 2000;
  alert(`el costo del producto es: $${costo}`);
}

// el usuario elige la forma de pago
let pago = prompt(
  "queres abonar en un pago unico (+0%), en 3 cuotas (+10%) o en 6 cuotas (+20%)"
);

// cuotas
let cuotas = [3, 6];
let valorCuotas = 0;

if (pago == "pago unico") {
  alert(`el costo de tu producto es: $${costo} `);
} else if (pago == "3 cuotas") {
  cuotas.pop();
  costo = costo * 1.1;
  valorCuotas = (valorCuotas + costo) / cuotas;

  costo = costo.toFixed(2);
  valorCuotas = valorCuotas.toFixed(2);

  alert(
    `el costo total del producto es: $${costo}, que deberas abonar en 3 cuotas de: $${valorCuotas}`
  );
} else {
  cuotas.shift();
  costo = costo * 1.2;
  valorCuotas = (valorCuotas + costo) / cuotas;

  costo = costo.toFixed(2);
  valorCuotas = valorCuotas.toFixed(2);

  alert(
    `el costo total del producto es: $${costo}, que deberas abonar en 3 cuotas de: $${valorCuotas}`
  );
}
