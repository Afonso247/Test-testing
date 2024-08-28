import { test, expect } from '@playwright/test';

const site = 'https://www.supertroco.com.br/'
// 1
test('Entrar no site', async ({ page }) => {
  await page.goto(site);

  await expect(page).toHaveTitle('supertroco');
});
// 2
test('Entrar em "Comprar Pontos"', async ({ page }) => {
  await page.goto(site);
  await page.locator('.btncomprarpontos').first().click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/acumularpontos'); 
})
// 3
test('Pesquisar com o campo vazio', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByRole('button', { name: '| Buscar' }).click();

  const elemento = page.locator('.bottom-card > .default').first();

  expect(elemento).toBeVisible;
})
// 4
test('Pesquisar com o campo "batendo a cabeça no teclado"', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('hdfiughidfhgi');
  await page.getByRole('button', { name: '| Buscar' }).click();

  const noItems = page.locator('.box-no-items');

  expect(noItems).toBeVisible; 
})
// 5
test('Pesquisar com o campo "Hering"', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('Hering');
  await page.getByRole('button', { name: '| Buscar' }).click();

  const heringItem = page.getByText('ESPECIAL LANÇAMENTO - HERING 25% de desconto na Hering até 30/11! 375 pontos');

  expect(heringItem).toBeVisible; 
})
// 6
test('Pesquisar com o campo incompleto "Her"', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('Her');
  await page.getByRole('button', { name: '| Buscar' }).click();

  const heringItem = page.getByText('ESPECIAL LANÇAMENTO - HERING 25% de desconto na Hering até 30/11! 375 pontos');

  expect(heringItem).toBeVisible; 
})
// 7
test('Pesquisar com o campo incompleto "ing"', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('ing');
  await page.getByRole('button', { name: '| Buscar' }).click();

  const heringItem = page.getByText('ESPECIAL LANÇAMENTO - HERING 25% de desconto na Hering até 30/11! 375 pontos');

  expect(heringItem).toBeVisible; 
})
// 8
test('Clicar na primeira opção "Ver mais"', async ({ page }) => {
  await page.goto(site);
  await page.getByText('VER MAIS').first().click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers/?category=all&sortOrder=desc&sortOption=popularity');
})
// 9
test('Clicar na opção de "Recarga de celular"', async ({ page }) => {
  await page.goto(site);
  await page.getByRole('heading', { name: 'Recarga de celular' }).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?category=recharge&sortOrder=asc&sortOption=points');
})
// 10
test('Clicar na opção de "Programa de pontos"', async ({ page }) => {
  await page.goto(site);
  await page.getByRole('heading', { name: 'Programa de pontos' }).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?category=partners&sortOrder=asc&sortOption=points');
})