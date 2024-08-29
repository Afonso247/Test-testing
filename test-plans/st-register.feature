Feature: Registro de Usuário no Super Troco

  Scenario: Acessar a tela de registro
    Given que o usuário está na página inicial do site
    When o usuário clica no botão "CADASTRE-SE"
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/cadastro/steps/cpf"

  Scenario: Clicar em "Continuar" com o campo de CPF vazio
    Given que o usuário está na página de cadastro de CPF
    When o usuário clica no botão "Continuar" sem preencher o CPF
    Then a mensagem de erro "Campo requerido" deve ser exibida

  Scenario: Campo de CPF com caracteres insuficientes
    Given que o usuário está na página de cadastro de CPF
    When o usuário preenche o campo de CPF com "123"
    Then a mensagem de erro "Deve ter 11 caracteres" deve ser exibida

  Scenario: Campo de CPF inválido
    Given que o usuário está na página de cadastro de CPF
    When o usuário preenche o campo de CPF com "11111111111"
    Then a mensagem de erro "CPF inválido" deve ser exibida

  Scenario: Clicar em "Continuar" com o campo de CPF válido
    Given que o usuário está na página de cadastro de CPF
    When o usuário preenche o campo de CPF com um CPF válido
    And o usuário clica no botão "Continuar"
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/cadastro/steps/datanascimento"

  Scenario: Clicar em "Continuar" com o campo de Data de Nascimento vazio
    Given que o usuário está na página de cadastro de data de nascimento
    When o usuário clica no botão "Continuar" sem preencher a data de nascimento
    Then a mensagem de erro "Campo requerido" deve ser exibida

  Scenario: Clicar em "Continuar" com o campo de Data de Nascimento inválido - geral
    Given que o usuário está na página de cadastro de data de nascimento
    When o usuário preenche o campo de data de nascimento com "11111111"
    And o usuário clica no botão "Continuar"
    Then a mensagem de erro "Insira uma data de nascimento" deve ser exibida

  Scenario: Clicar em "Continuar" com o campo de Data de Nascimento inválido - dia
    Given que o usuário está na página de cadastro de data de nascimento
    When o usuário preenche o campo de data de nascimento com "40/10/2001"
    And o usuário clica no botão "Continuar"
    Then a mensagem de erro "Insira uma data de nascimento" deve ser exibida

  Scenario: Clicar em "Continuar" com o campo de Data de Nascimento inválido - mês
    Given que o usuário está na página de cadastro de data de nascimento
    When o usuário preenche o campo de data de nascimento com "10/40/2001"
    And o usuário clica no botão "Continuar"
    Then a mensagem de erro "Insira uma data de nascimento" deve ser exibida

  Scenario: Clicar em "Continuar" com o campo de Data de Nascimento inválido - ano
    Given que o usuário está na página de cadastro de data de nascimento
    When o usuário preenche o campo de data de nascimento com "10/10/1900"
    And o usuário clica no botão "Continuar"
    Then a mensagem de erro "Insira uma data de nascimento" deve ser exibida
