import { test, expect } from '@playwright/test';

const site = 'https://www.supertroco.com.br/'
const siteLogin = 'https://www.supertroco.com.br/entrar'
// 1
test('Mostrar mensagem de erro ao inserir dado insificiente em CPF', async ({ page }) => {
    await page.goto(siteLogin);
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('123');

    const errorMessage = page.getByText('Deve ter 11 caracteres');
    await expect(errorMessage).toBeVisible();
})
// 2
test('Clicar em "Continuar" com o campo de Data de Nascimento inválido - geral', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('82576500056');
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByPlaceholder('Exemplo: 00/00/').click();
    await page.getByPlaceholder('Exemplo: 00/00/').fill('11111111');
    await page.getByRole('button', { name: 'Continuar' }).click();

    const errorMessage = page.getByText('Insira uma data de nascimento');
    await expect(errorMessage).toBeVisible();
})
// 3
test('Pesquisar com o campo "batendo a cabeça no teclado"', async ({ page }) => {
    await page.goto(site);
    await page.getByPlaceholder('Qual produto você está').click();
    await page.getByPlaceholder('Qual produto você está').fill('hdfiughidfhgi');
    await page.getByRole('button', { name: '| Buscar' }).click();
  
    const noItems = page.locator('.box-no-items');
  
    expect(noItems).toBeVisible; 
})
// 4
test('Confirmar uma oferta específica sem logar', async ({ page }) => {
    await page.goto(site);
    await page.locator('#dropdown').getByRole('img').click();
    await page.getByText('Todas', { exact: true }).click();
    await page.locator('.bottom-card > .default').first().click();
    await page.getByRole('button', { name: 'CONFIRMAR TROCA' }).click();
  
    const element = page.getByText('Faça login para efetuar a');
  
    await expect(element).toBeVisible();
});
// 5
test('Inserir um CPF válido, apagar o campo, e inserir nada no campo de e-mail', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'ENTRAR' }).click();
    await page.getByText('Esqueci minha senha').click();
    await page.waitForTimeout(1000);
    await page.getByLabel('CPF Usamos seu CPF para').fill('82576500056');
    await page.waitForTimeout(1000);
    await page.getByLabel('CPF Usamos seu CPF para').fill('');
    await page.getByRole('button', { name: 'via E-mail' }).click();
    await page.getByText('Confirme seu endereço de e-').click();
    await page.getByLabel('Confirme seu endereço de e-').fill('');

    const element = page.getByRole('button', { name: 'Enviar' });
    expect(element).not.toBeEnabled();
})