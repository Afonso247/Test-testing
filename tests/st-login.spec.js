import { test, expect } from '@playwright/test';

const site = 'https://www.supertroco.com.br/'
const siteLogin = 'https://www.supertroco.com.br/entrar'
// 1
test('Acessar a tela de login', async ({ page }) => {
    await page.goto(site);
    await page.getByRole('button', { name: 'ENTRAR' }).click();
  
    await expect(page).toHaveURL('https://www.supertroco.com.br/entrar'); 
})
// 2
test('Ao entrar com o campo vazio', async ({ page }) => {
    await page.goto(siteLogin);
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('');
    await page.getByPlaceholder('Exemplo: ********').click();
    await page.getByPlaceholder('Exemplo: ********').fill('');
    await page.getByText('ENTRAR Esqueci minha senha').click();

    await expect(page).toHaveURL('https://www.supertroco.com.br/entrar/');
})
// 3
test('Ao entrar com o campo inválido', async ({ page }) => {
    await page.goto(siteLogin);
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('123');
    await page.getByPlaceholder('Exemplo: ********').click();
    await page.getByPlaceholder('Exemplo: ********').fill('123');
    await page.getByText('ENTRAR Esqueci minha senha').click();

    await expect(page).toHaveURL('https://www.supertroco.com.br/entrar/');
})
// 4
test('Mostrar mensagem de erro ao inserir dado insificiente em CPF', async ({ page }) => {
    await page.goto(siteLogin);
    await page.getByPlaceholder('Exemplo: 000.000.000-').click();
    await page.getByPlaceholder('Exemplo: 000.000.000-').fill('123');

    const errorMessage = page.getByText('Deve ter 11 caracteres');
    await expect(errorMessage).toBeVisible();
})
// 5
test('Acessar a tela de recuperar senha', async ({ page }) => {
    await page.goto(siteLogin);
    await page.getByText('Esqueci minha senha').click();

    await expect(page).toHaveURL('https://www.supertroco.com.br/recuperarsenha');
})
// 6
test('Inserir dados insuficientes no campo CPF de recuperar senha', async ({ page }) => {
    await page.goto('https://www.supertroco.com.br/recuperarsenha');
    await page.getByLabel('CPF Usamos seu CPF para').fill('123');
    await page.locator('.button-action').click();

    await expect(page).toHaveURL('https://www.supertroco.com.br/recuperarsenha/');
})
// 7
test('Inserir um CPF válido, apagar o campo, e clicar no botão', async ({ page }) => {
    await page.goto('https://www.supertroco.com.br/recuperarsenha');
    await page.getByLabel('CPF Usamos seu CPF para').fill('82576500056');
    await page.getByLabel('CPF Usamos seu CPF para').fill('');
    await page.locator('.button-action').click();

    const button = page.getByRole('button', { name: 'via E-mail' });
    expect(button).toBeVisible();
})
// 8
test('Inserir um CPF válido, apagar o campo, e inserir nada no campo de e-mail', async ({ page }) => {
    await page.goto('https://www.supertroco.com.br/recuperarsenha');
    await page.getByLabel('CPF Usamos seu CPF para').fill('82576500056');
    await page.waitForTimeout(1000);
    await page.getByLabel('CPF Usamos seu CPF para').fill('');
    await page.getByRole('button', { name: 'via E-mail' }).click();
    await page.getByText('Confirme seu endereço de e-').click();
    await page.getByLabel('Confirme seu endereço de e-').fill('');

    const element = page.getByRole('button', { name: 'Enviar' });
    expect(element).not.toBeEnabled();
})
// 9
test('Acessar a politica de privacidade', async ({ page }) => {
    await page.goto(siteLogin);
    await page.getByRole('link', { name: 'política de privacidade' }).click();

    await expect(page).toHaveURL('https://policies.google.com/privacy');
})
// 10
test('Acessar os termos de servico', async ({ page }) => {
    await page.goto(siteLogin);
    await page.getByRole('link', { name: 'Termos de Serviço' }).click();

    await expect(page).toHaveURL('https://policies.google.com/terms');
})