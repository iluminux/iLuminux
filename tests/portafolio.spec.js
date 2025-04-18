const { test, expect } = require('@playwright/test');

test('El portafolio carga y muestra el título principal', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await expect(page.getByText('Sobre mí')).toBeVisible();
});

test('El portafolio muestra el título de bienvenida', async ({ page }) => {
  await page.goto('http://localhost:5500/index.html');
  await expect(page.getByText('Bienvenid@ a iLuminux')).toBeVisible();
});

