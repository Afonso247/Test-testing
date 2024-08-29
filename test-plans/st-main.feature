Feature: Testar interações principais no site Super Troco

  Scenario: Mostrar mensagem de erro ao inserir dado insuficiente em CPF
    Given que o usuário está na página de login
    When o usuário preenche o campo de CPF com "123"
    Then a mensagem de erro "Deve ter 11 caracteres" deve estar visível

  Scenario: Clicar em "Continuar" com o campo de Data de Nascimento inválido - geral
    Given que o usuário está na página inicial do site
    When o usuário clica no botão "CADASTRE-SE"
    And o usuário preenche o campo de CPF com "82576500056"
    And o usuário clica no botão "Continuar"
    And o usuário preenche o campo de Data de Nascimento com "11111111"
    And o usuário clica no botão "Continuar"
    Then a mensagem de erro "Insira uma data de nascimento" deve estar visível

  Scenario: Pesquisar com o campo "batendo a cabeça no teclado"
    Given que o usuário está na página inicial do site
    When o usuário preenche o campo de pesquisa com "hdfiughidfhgi"
    And o usuário clica no botão "Buscar"
    Then o elemento com a classe "box-no-items" deve estar visível

  Scenario: Confirmar uma oferta específica sem logar
    Given que o usuário acessou todas as ofertas
    When o usuário clica em uma oferta da lista
    And o usuário clica no botão "CONFIRMAR TROCA"
    Then o texto "Faça login para efetuar a" deve estar visível na página

  Scenario: Inserir um CPF válido, apagar o campo, e inserir nada no campo de e-mail
    Given que o usuário está na página inicial do site
    When o usuário clica no botão "ENTRAR"
    And o usuário clica no link "Esqueci minha senha"
    And o usuário preenche o campo de CPF com "82576500056"
    And o usuário apaga o conteúdo do campo de CPF
    And o usuário clica no botão "via E-mail"
    And o usuário clica no campo "Confirme seu endereço de e-mail"
    And o usuário não preenche o campo de e-mail
    Then o botão "Enviar" não deve estar habilitado
