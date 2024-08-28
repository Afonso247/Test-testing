import { test, expect } from '@playwright/test';

const site = 'https://www.supertroco.com.br/'
// 1
test('Acessar o link "Como Funciona"', async ({ page }) => {
  await page.goto(site);
  await page.getByText('Como Funciona').nth(4).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/comofunciona'); 
})
// 2
test('Acessar o link "Onde Encontro"', async ({ page }) => {
    await page.goto(site);
    await page.getByText('Onde Encontro').click();
  
    await expect(page).toHaveURL('https://www.supertroco.com.br/acumularPontos#ondeEncontro'); 
  })
// 3
test('Acessar o link "Política de Privacidade"', async ({ page }) => {
    await page.goto(site);
    await page.getByText('Política de Privacidade').click();
  
    await expect(page).toHaveURL('https://www.supertroco.com.br/privacidade'); 
  })
// 4
test('Acessar o link "Regulamento"', async ({ page }) => {
  await page.goto(site);
  await page.getByText('Regulamento', { exact: true }).click();

  await expect(page).toHaveURL('https://www.supertroco.com.br/regulamento'); 
})
// 5
test('Acessar o link "APP Supertroco lojista"', async ({ page }) => {
  await page.goto(site);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'APP Supertroco lojista' }).click();
  const page1 = await page1Promise;

  await expect(page1).toHaveURL('https://www.supertroco.com.br/applojista/');
})
// 6
test('Acessar o link "Acesso Parceiro"', async ({ page }) => {
  await page.goto(site);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Acesso Parceiro' }).click();
  const page1 = await page1Promise;

  const element = page1.getByRole('heading', { name: 'PORTAL DE GESTÃO' })

  expect(element).toBeVisible;
})
// 7
test('Acessar o link do LinkedIn', async ({ page }) => {
  await page.goto(site);
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Linkedin' }).click();
  const page1 = await page1Promise;

  await expect(page1).toHaveURL('https://br.linkedin.com/company/supertroco');
})
// 8
test('Acessar o link do Youtube', async ({ page }) => {
    await page.goto(site);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Youtube' }).click();
    const page1 = await page1Promise;

    await expect(page1).toHaveURL('https://www.youtube.com/channel/UCxDGLGbZUC1U_kjr5PFRNbw');
})
// 9
test('Acessar o link do Instagram', async ({ page }) => {
    await page.goto(site);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Instagram' }).click();
    const page1 = await page1Promise;

    await expect(page1).toHaveURL('https://www.instagram.com/supertroco/');
})
// 10
test('Acessar o link do Facebook', async ({ page }) => {
    await page.goto(site);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Facebook' }).click();
    const page1 = await page1Promise;

    await expect(page1).toHaveURL('https://www.facebook.com/supertroco.oficial');
})