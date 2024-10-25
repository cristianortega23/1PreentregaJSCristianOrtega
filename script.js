function principal() {
  alert("Bienvenido/as Valhalla PetShop");
  let opcion;
  let total = 0;
  let salir = false;
  do {
    let cantidad = 0;
    opcion = SolicitarNumAlCliente(
      "Seleccione el producto que desea comprar para tu cachorro\n1 - Camiseta Jordan S $10000\n2 - Camiseta Jordan M $12000\n3 - Camiseta Jordan L $13500\n4 - Camiseta Jordan XL $15000\n5 - Camiseta Messi S $10000\n6 - Camiseta Messi M $12000\n7 - Camiseta Messi L $13500\n8 - Finalizar compra\n0 - Salir"
    );
    if (opcion === 1) {
      cantidad = SolicitarNumAlCliente(
        "Ingrese cuantas camisetas de Jordan S quiere comprar"
      );
      total = total + cantidad * 10000;
    } else if (opcion === 2) {
      cantidad = SolicitarNumAlCliente(
        "Ingrese cuantas camisetas de Jordan M quiere comprar"
      );
      total = total + cantidad * 12000;
    } else if (opcion === 3) {
      cantidad = SolicitarNumAlCliente(
        "Ingrese cuantas camisetas de Jordan L quiere comprar"
      );
      total = total + cantidad * 13500;
    } else if (opcion === 4) {
        cantidad = SolicitarNumAlCliente(
          "Ingrese cuantas camisetas de Jordan XL quiere comprar"
        );
        total = total + cantidad * 15000;
    } else if (opcion === 5) {
        cantidad = SolicitarNumAlCliente(
          "Ingrese cuantas camisetas de Messi S quiere comprar"
        );
        total = total + cantidad * 10000;
    } else if (opcion === 6) {
        cantidad = SolicitarNumAlCliente(
          "Ingrese cuantas camisetas de Messi M quiere comprar"
        );
        total = total + cantidad * 12000;
    } else if (opcion === 7) {
        cantidad = SolicitarNumAlCliente(
          "Ingrese cuantas camisetas de Messi L quiere comprar"
        );
        total = total + cantidad * 13500;
    } else if (opcion === 8) {
      if (total !== 0) {
        total = TotalDeCompra(total);
        alert("Total: $" + total + ". Gracias por su compra!");
      } else {
        alert("Primero debe agregar productos al carrito");
      }
    } else if (isNaN(opcion) || opcion > 8 || opcion < 0) {
      alert("OPCION INCORRECTA");
      salir = true;
    }
  } while (opcion !== 0 && opcion !== 8 && !salir);
}

function SolicitarNumAlCliente(mensaje) {
  return Number(prompt(mensaje));
}

function TotalDeCompra(total) {
  let FormaPago;
  do {
    FormaPago = SolicitarNumAlCliente(
      "Seleccione Forma de pago\n1 - Efectivo/Transferencia -10%\n2 - Tarj Créd +5%"
    );
    if (FormaPago === 1) {
      total = total * 0.9;
    } else if (FormaPago === 2) {
      total = total * 1.05;
    } else {
      alert("Opción incorrecta, reintente");
    }
  } while (FormaPago !== 1 && FormaPago !== 2);
  return total;
}

principal();
