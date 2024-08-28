import { test, expect } from '@playwright/test';

const site = 'https://www.supertroco.com.br/'
// 1
test('Acessar a tela de registro', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
  
    await expect(page).toHaveURL('https://www.supertroco.com.br/cadastro/steps/cpf'); 
})
// 2
test('Clicar em "Continuar" com o campo de CPF vazio', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByRole('button', { name: 'Continuar' }).click();

    const errorMessage = page.getByText('Campo requerido');
    await expect(errorMessage).toBeVisible();
})
// 3
test('Campo de CPF com caracteres insuficientes', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('123');

    const errorMessage = page.getByText('Deve ter 11 caracteres');
    await expect(errorMessage).toBeVisible();
})
// 4
test('Campo de CPF inválido', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('11111111111');

    const errorMessage = page.getByText('CPF inválido');
    await expect(errorMessage).toBeVisible();
})
// 5
test('Clicar em "Continuar" com o campo de CPF válido', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('82576500056');
    await page.getByRole('button', { name: 'Continuar' }).click();

    await expect (page).toHaveURL('https://www.supertroco.com.br/cadastro/steps/datanascimento');
})
// 6
test('Clicar em "Continuar" com o campo de Data de Nascimento vazio', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('82576500056');
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByPlaceholder('Exemplo: 00/00/').click();
    await page.getByRole('button', { name: 'Continuar' }).click();

    const errorMessage = page.getByText('Campo requerido');
    await expect(errorMessage).toBeVisible();
})
// 7
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
// 8
test('Clicar em "Continuar" com o campo de Data de Nascimento inválido - dia', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('82576500056');
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByPlaceholder('Exemplo: 00/00/').click();
    await page.getByPlaceholder('Exemplo: 00/00/').fill('40/10/2001');
    await page.getByRole('button', { name: 'Continuar' }).click();

    const errorMessage = page.getByText('Insira uma data de nascimento');
    await expect(errorMessage).toBeVisible();
})
// 9
test('Clicar em "Continuar" com o campo de Data de Nascimento inválido - mes', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('82576500056');
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByPlaceholder('Exemplo: 00/00/').click();
    await page.getByPlaceholder('Exemplo: 00/00/').fill('10/40/2001');
    await page.getByRole('button', { name: 'Continuar' }).click();

    const errorMessage = page.getByText('Insira uma data de nascimento');
    await expect(errorMessage).toBeVisible();
})
// 10
test('Clicar em "Continuar" com o campo de Data de Nascimento inválido - ano', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'CADASTRE-SE' }).click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('82576500056');
    await page.getByRole('button', { name: 'Continuar' }).click();
    await page.getByPlaceholder('Exemplo: 00/00/').click();
    await page.getByPlaceholder('Exemplo: 00/00/').fill('10/10/1900');
    await page.getByRole('button', { name: 'Continuar' }).click();

    const errorMessage = page.getByText('Insira uma data de nascimento');
    await expect(errorMessage).toBeVisible();
})