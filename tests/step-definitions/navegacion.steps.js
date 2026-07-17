const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// Inicialización automática del navegador
Before(async function () {
  await this.init();
});

// Cierre automático del navegador
After(async function () {
  await this.close();
});

Given('que el usuario está en la página principal', async function () {
  await this.page.goto('http://localhost:3000');
});

Given('que el usuario está en la página de la tienda', async function () {
  await this.page.goto('http://localhost:3000/tienda');
});

// Paso unificado para cualquier clic (enlace, botón, logo, etc.)
When('el usuario hace clic en {string}', async function (nombreEnlace) {
  await this.page.click(`text=${nombreEnlace}`);
});

Then('el usuario debería ver el catálogo de productos disponibles', async function () {
  await expect(this.page.locator('text=Generar Orden').first()).toBeVisible();
});

// Paso dinámico para validar cualquier ruta esperada
Then('la URL debería contener {string}', async function (rutaEsperada) {
  await expect(this.page).toHaveURL(new RegExp(rutaEsperada));
});

Then('el usuario debería ver la galería de gatos', async function () {
  await expect(this.page.locator('h1')).toContainText('Cat Gallery');
});

Then('la URL debería ser la raíz del sitio', async function () {
  await expect(this.page).toHaveURL('http://localhost:3000/');
});