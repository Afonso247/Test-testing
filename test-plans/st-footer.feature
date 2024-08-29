Feature: Verificação dos Links no Rodapé do Site Super Troco

  Background: 
    Given que o usuário acessa o site "https://www.supertroco.com.br/"

  Scenario: Acessar o link "Como Funciona"
    When o usuário clica no link "Como Funciona"
    Then o usuário deve ser redirecionado para "https://www.supertroco.com.br/comofunciona"

  Scenario: Acessar o link "Onde Encontro"
    When o usuário clica no link "Onde Encontro"
    Then o usuário deve ser redirecionado para "https://www.supertroco.com.br/acumularPontos#ondeEncontro"

  Scenario: Acessar o link "Política de Privacidade"
    When o usuário clica no link "Política de Privacidade"
    Then o usuário deve ser redirecionado para "https://www.supertroco.com.br/privacidade"

  Scenario: Acessar o link "Regulamento"
    When o usuário clica no link "Regulamento"
    Then o usuário deve ser redirecionado para "https://www.supertroco.com.br/regulamento"

  Scenario: Acessar o link "APP Supertroco lojista"
    When o usuário clica no link "APP Supertroco lojista"
    Then uma nova aba deve abrir em "https://www.supertroco.com.br/applojista/"

  Scenario: Acessar o link "Acesso Parceiro"
    When o usuário clica no link "Acesso Parceiro"
    Then uma nova aba deve abrir e o elemento com título "PORTAL DE GESTÃO" deve estar visível

  Scenario: Acessar o link do LinkedIn
    When o usuário clica no link "Linkedin"
    Then uma nova aba deve abrir em "https://br.linkedin.com/company/supertroco"

  Scenario: Acessar o link do Youtube
    When o usuário clica no link "Youtube"
    Then uma nova aba deve abrir em "https://www.youtube.com/channel/UCxDGLGbZUC1U_kjr5PFRNbw"

  Scenario: Acessar o link do Instagram
    When o usuário clica no link "Instagram"
    Then uma nova aba deve abrir em "https://www.instagram.com/supertroco/"

  Scenario: Acessar o link do Facebook
    When o usuário clica no link "Facebook"
    Then uma nova aba deve abrir em "https://www.facebook.com/supertroco.oficial"
