import { test, expect } from '@playwright/test';

const site = 'https://www.supertroco.com.br/'

test('Entrar no site', async ({ page }) => {
  await page.goto(site);

  await expect(page).toHaveTitle('supertroco');
});

test('Entrar em "Comprar Pontos"', async ({ page }) => {
  await page.goto(site);
  await page.locator('.btncomprarpontos').first().click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/acumularpontos'); 
})

test('Pesquisar com o campo vazio', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByRole('button', { name: '| Buscar' }).click();

  const elemento = page.locator('.bottom-card > .default').first();

  expect(elemento).toBeVisible;
})

test('Pesquisar com o campo "batendo a cabeça no teclado"', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('hdfiughidfhgi');
  await page.getByRole('button', { name: '| Buscar' }).click();

  const noItems = page.locator('.box-no-items');

  expect(noItems).toBeVisible; 
})

test('Pesquisar com o campo "Hering"', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('Hering');
  await page.getByRole('button', { name: '| Buscar' }).click();

  const heringItem = page.getByText('ESPECIAL LANÇAMENTO - HERING 25% de desconto na Hering até 30/11! 375 pontos');

  expect(heringItem).toBeVisible; 
})