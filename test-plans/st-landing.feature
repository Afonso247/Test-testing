Feature: Testes da página inicial do Super Troco

  Scenario: Entrar no site
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    Then o título da página deve ser "supertroco"

  Scenario: Entrar em "Comprar Pontos"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário clica no botão "Comprar Pontos"
    Then a URL deve ser "https://www.supertroco.com.br/acumularpontos"

  Scenario: Pesquisar com o campo vazio
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário clica no botão de busca com o campo de pesquisa vazio
    Then o elemento com a classe ".bottom-card > .default" deve ser visível

  Scenario: Pesquisar com o campo "batendo a cabeça no teclado"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário preenche o campo de pesquisa com caracteres aleatórios
    And o usuário clica no botão de busca
    Then o elemento com a classe ".box-no-items" deve ser visível

  Scenario: Pesquisar com o campo "Hering"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário preenche o campo de pesquisa com "Hering"
    And o usuário clica no botão de busca
    Then o item "ESPECIAL LANÇAMENTO - HERING 25% de desconto na Hering até 30/11! 375 pontos" deve ser visível

  Scenario: Pesquisar com o campo incompleto "Her"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário preenche o campo de pesquisa com "Her"
    And o usuário clica no botão de busca
    Then o item "ESPECIAL LANÇAMENTO - HERING 25% de desconto na Hering até 30/11! 375 pontos" deve ser visível

  Scenario: Pesquisar com o campo incompleto "ing"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário preenche o campo de pesquisa com "ing"
    And o usuário clica no botão de busca
    Then o item "ESPECIAL LANÇAMENTO - HERING 25% de desconto na Hering até 30/11! 375 pontos" deve ser visível

  Scenario: Clicar na primeira opção "Ver mais"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário clica no primeiro botão "VER MAIS"
    Then a URL deve ser "https://www.supertroco.com.br/store/offers/?category=all&sortOrder=desc&sortOption=popularity"

  Scenario: Clicar na opção de "Recarga de celular"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário clica na opção "Recarga de celular"
    Then a URL deve ser "https://www.supertroco.com.br/store/offers?category=recharge&sortOrder=asc&sortOption=points"

  Scenario: Clicar na opção de "Programa de pontos"
    Given que o usuário acessa o site "https://www.supertroco.com.br/"
    When o usuário clica na opção "Programa de pontos"
    Then a URL deve ser "https://www.supertroco.com.br/store/offers?category=partners&sortOrder=asc&sortOption=points"
