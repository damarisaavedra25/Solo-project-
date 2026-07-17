const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// 'this.page' lo proporciona el contexto de Playwright/Cucumber
Given('que el usuario está en la página principal de la tienda', async function () {
  await this.page.goto('http://localhost:3000/tienda');
});

When('el usuario selecciona un producto y hace clic en "Generar Orden"', async function () {
  const boton = this.page.locator('button:has-text("Generar Orden")').first();
  await boton.click();
});

Then('el sistema procesa la orden tras una breve espera', async function () {
  // Esperamos a que la carga termine (el texto vuelve a cambiar o el mensaje aparece)
  await this.page.waitForSelector('text=¡Orden Generada!', { timeout: 20000 });
});

Then('debería aparecer el mensaje "¡Orden Generada!" con un folio que empieza con "MAY-"', async function () {
  // 1. Validar el mensaje de éxito
  const mensaje = this.page.locator('text=¡Orden Generada!');
  await expect(mensaje).toBeVisible();

  // 2. Usar un selector preciso para el elemento que contiene el folio real
  // Usamos el 'span' con la clase específica que vimos en el error
  const folioElemento = this.page.locator('span.text-cyan-400');
  
  await expect(folioElemento).toBeVisible();

  // 3. Obtener el texto y validar
  const textoFolio = await folioElemento.textContent();
  
  if (!textoFolio.startsWith('MAY-')) {
    throw new Error(`El folio "${textoFolio}" no comienza con "MAY-"`);
  }
  
  console.log(`Folio validado correctamente: ${textoFolio}`);
});