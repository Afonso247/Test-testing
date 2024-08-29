import { test, expect } from '@playwright/test';

const site = 'https://www.supertroco.com.br/'
// 1
test('Acessar TODAS as ofertas', async ({ page }) => {
  await page.goto(site);
  await page.locator('#dropdown').getByRole('img').click();
  await page.getByText('Todas', { exact: true }).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?category=all&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points');
});
// 2
test('Acessar as ofertas "Cupons"', async ({ page }) => {
  await page.goto(site);
  await page.locator('#dropdown').getByRole('img').click();
  await page.getByText('Cupons').click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?category=coupon&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points');
});
// 3
test('Acessar as ofertas "Produtos"', async ({ page }) => {
  await page.goto(site);
  await page.locator('#dropdown').getByRole('img').click();
  await page.getByText('Produtos', { exact: true }).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?category=products&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points');
});
// 4
test('Acessar as ofertas "Serviços"', async ({ page }) => {
  await page.goto(site);
  await page.locator('#dropdown').getByRole('img').click();
  await page.getByText('Serviços', { exact: true }).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?category=services&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points');
});
// 5
test('Acessar as ofertas "Recargas e Dados de Internet"', async ({ page }) => {
  await page.goto(site);
  await page.locator('#dropdown').getByRole('img').click();
  await page.getByText('Recargas e Dados de Internet', { exact: true }).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?category=recharge&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points');
});
// 6
test('Acessar uma oferta específica', async ({ page }) => {
  await page.goto(site);
  await page.locator('#dropdown').getByRole('img').click();
  await page.getByText('Todas', { exact: true }).click();
  await page.locator('.bottom-card > .default').first().click();

  const element = page.getByText('Resumo da operação');

  await expect(element).toBeVisible();
});
// 7
test('Confirmar uma oferta específica sem logar', async ({ page }) => {
  await page.goto(site);
  await page.locator('#dropdown').getByRole('img').click();
  await page.getByText('Todas', { exact: true }).click();
  await page.locator('.bottom-card > .default').first().click();
  await page.getByRole('button', { name: 'CONFIRMAR TROCA' }).click();

  const element = page.getByText('Faça login para efetuar a');

  await expect(element).toBeVisible();
});
// 8
test('Acessar uma oferta com mais de uma opção', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('giuliana');
  await page.getByPlaceholder('Qual produto você está').press('Enter');
  await page.locator('.bottom-card > .default').first().click();

  const elements = await page.$$('button', { name: 'Trocar' });
  
  expect(elements.length).toBeGreaterThan(1);
});
// 9
test('Acessar uma oferta com uma única opção', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('havanna');
  await page.getByPlaceholder('Qual produto você está').press('Enter');
  await page.locator('.bottom-card > .default').first().click();

  const element = page.getByText('Resumo da operação');

  await expect(element).toBeVisible();
});
// 10
test('Acessar uma oferta com uma única opção, e voltar uma página', async ({ page }) => {
  await page.goto(site);
  await page.getByPlaceholder('Qual produto você está').click();
  await page.getByPlaceholder('Qual produto você está').fill('havanna');
  await page.getByPlaceholder('Qual produto você está').press('Enter');
  await page.waitForTimeout(1000);
  await page.locator('.bottom-card > .default').first().click();
  await page.waitForTimeout(1000);
  await page.goBack();

  await expect(page).toHaveURL('https://www.supertroco.com.br/store/offers?sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points&search=havanna');
});
