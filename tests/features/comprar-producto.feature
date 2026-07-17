Feature: Comprar producto en la tienda
  Como usuario de la tienda
  Quiero procesar una orden de compra
  Para adquirir mis productos correctamente

@only
  Scenario: Procesamiento exitoso de una orden
    Given que el usuario está en la página principal de la tienda
    When el usuario selecciona un producto y hace clic en "Generar Orden"
    And el sistema procesa la orden tras una breve espera
    And debería aparecer el mensaje "¡Orden Generada!" con un folio que empieza con "MAY-"
    