Feature: Navegación en la tienda
  Como usuario de la tienda
  Quiero navegar entre la galería y la sección de pedidos
  Para poder ver mis opciones y gestionar mis compras

  Scenario: Navegar de la galería a la tienda
    Given que el usuario está en la página principal
    When el usuario hace clic en el enlace de "Tienda"
    Then el usuario debería ver el catálogo de productos disponibles
    And la URL debería contener "/tienda"

  Scenario: Regresar al inicio desde la tienda
    Given que el usuario está en la página de la tienda
    When el usuario hace clic en el logo o enlace de "Inicio"
    Then el usuario debería ver la galería de gatos
    And la URL debería ser la raíz del sitio