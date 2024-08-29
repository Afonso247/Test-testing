Feature: Testar acesso às ofertas no site Super Troco

  Scenario: Acessar TODAS as ofertas
    Given que o usuário está na página inicial do site
    When o usuário clica no ícone do dropdown
    And o usuário seleciona a opção "Todas"
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/store/offers?category=all&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points"

  Scenario: Acessar as ofertas "Cupons"
    Given que o usuário está na página inicial do site
    When o usuário clica no ícone do dropdown
    And o usuário seleciona a opção "Cupons"
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/store/offers?category=coupon&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points"

  Scenario: Acessar as ofertas "Produtos"
    Given que o usuário está na página inicial do site
    When o usuário clica no ícone do dropdown
    And o usuário seleciona a opção "Produtos"
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/store/offers?category=products&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points"

  Scenario: Acessar as ofertas "Serviços"
    Given que o usuário está na página inicial do site
    When o usuário clica no ícone do dropdown
    And o usuário seleciona a opção "Serviços"
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/store/offers?category=services&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points"

  Scenario: Acessar as ofertas "Recargas e Dados de Internet"
    Given que o usuário está na página inicial do site
    When o usuário clica no ícone do dropdown
    And o usuário seleciona a opção "Recargas e Dados de Internet"
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/store/offers?category=recharge&sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points"

  Scenario: Acessar uma oferta específica
    Given que o usuário acessou todas as ofertas
    When o usuário clica em uma oferta da lista
    Then o elemento "Resumo da operação" deve estar visível na página

  Scenario: Confirmar uma oferta específica sem logar
    Given que o usuário acessou todas as ofertas
    When o usuário clica em uma oferta da lista
    And o usuário clica no botão "CONFIRMAR TROCA"
    Then o texto "Faça login para efetuar a" deve estar visível na página

  Scenario: Acessar uma oferta com mais de uma opção
    Given que o usuário busca por "giuliana" na barra de pesquisa
    When o usuário clica em uma oferta da lista
    Then mais de um botão "Trocar" deve estar disponível na página

  Scenario: Acessar uma oferta com uma única opção
    Given que o usuário busca por "havanna" na barra de pesquisa
    When o usuário clica em uma oferta da lista
    Then o elemento "Resumo da operação" deve estar visível na página

  Scenario: Acessar uma oferta com uma única opção, e voltar uma página
    Given que o usuário busca por "havanna" na barra de pesquisa
    When o usuário clica em uma oferta da lista
    And o usuário retorna à página anterior
    Then o usuário deve ser redirecionado para a URL "https://www.supertroco.com.br/store/offers?sortOrder=asc&minPointsRange=1&maxPointsRange=200000&sortOption=points&search=havanna"
