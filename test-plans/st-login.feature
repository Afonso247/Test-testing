Feature: Teste de funcionalidades de login e recuperação de senha no site Super Troco

  Scenario: Acessar a tela de login
    Given que o usuário está na página inicial
    When o usuário clica no botão "ENTRAR"
    Then o usuário deve ser redirecionado para "https://www.supertroco.com.br/entrar"

  Scenario: Tentar entrar com campos vazios
    Given que o usuário está na página de login
    When o usuário deixa o campo CPF vazio e a senha vazia
    And clica no botão "ENTRAR"
    Then o usuário deve permanecer na página "https://www.supertroco.com.br/entrar/"

  Scenario: Tentar entrar com campos inválidos
    Given que o usuário está na página de login
    When o usuário preenche o campo CPF com "123" e o campo de senha com "123"
    And clica no botão "ENTRAR"
    Then o usuário deve permanecer na página "https://www.supertroco.com.br/entrar/"

  Scenario: Mostrar mensagem de erro ao inserir dados insuficientes no CPF
    Given que o usuário está na página de login
    When o usuário preenche o campo CPF com "123"
    Then uma mensagem de erro "Deve ter 11 caracteres" deve ser exibida

  Scenario: Acessar a tela de recuperação de senha
    Given que o usuário está na página de login
    When o usuário clica no link "Esqueci minha senha"
    Then o usuário deve ser redirecionado para "https://www.supertroco.com.br/recuperarsenha"

  Scenario: Inserir dados insuficientes no campo CPF de recuperação de senha
    Given que o usuário está na página de recuperação de senha
    When o usuário preenche o campo CPF com "123"
    And clica no botão de ação
    Then o usuário deve permanecer na página "https://www.supertroco.com.br/recuperarsenha/"

  Scenario: Inserir e apagar CPF válido no campo de recuperação de senha
    Given que o usuário está na página de recuperação de senha
    When o usuário preenche o campo CPF com "82576500056" e depois apaga o conteúdo
    And clica no botão de ação
    Then o botão "via E-mail" deve estar visível

  Scenario: Inserir CPF válido e depois deixar o campo de e-mail vazio
    Given que o usuário está na página de recuperação de senha
    When o usuário preenche o campo CPF com "82576500056"
    And apaga o conteúdo do campo CPF
    And clica no botão "via E-mail"
    And clica no campo de e-mail e deixa o campo vazio
    Then o botão "Enviar" não deve estar habilitado

  Scenario: Acessar a política de privacidade
    Given que o usuário está na página de login
    When o usuário clica no link "política de privacidade"
    Then o usuário deve ser redirecionado para "https://policies.google.com/privacy"

  Scenario: Acessar os termos de serviço
    Given que o usuário está na página de login
    When o usuário clica no link "Termos de Serviço"
    Then o usuário deve ser redirecionado para "https://policies.google.com/terms"
