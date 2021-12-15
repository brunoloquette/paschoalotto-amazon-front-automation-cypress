Feature: Acessar página inicial e adicionar produtos ao carrinho
  O usuário visualiza a página incial e adiciona produtos ao carrinho

  Scenario: Acessar página incial e adicionar produtos ao carrinho

    Given Eu acesso a página  
    And Eu estou na página inicial    
    When Eu digito na caixa de busca "Smartphone Samsung Galaxy A31" 
    Then Eu clico em pesquisar na caixa de busca

    Given Eu vejo o produto pesquisado
    When Eu clico no link do produto
    Then Eu sou redirecionado para a página de detalhes do produto

    Given Eu vejo o detalhe do produto
    When Eu clico no botão adicionar ao carrinho
    And Eu clico em não adicionar cobertura
    Then Eu vejo a mensagem de adicionado ao carrinho

    When Eu digito na caixa de busca "Smartphone Samsung Galaxy M62 Preto" 
    Then Eu clico em pesquisar na caixa de busca

    Given Eu vejo o produto pesquisado
    When Eu clico no link do produto
    Then Eu sou redirecionado para a página de detalhes do produto

    Given Eu vejo o detalhe do produto
    When Eu clico no botão adicionar ao carrinho
    And Eu clico em não adicionar cobertura
    Then Eu vejo a mensagem de adicionado ao carrinho

    When Eu digito na caixa de busca "Smartphone Xiaomi Redmi Note 9" 
    Then Eu clico em pesquisar na caixa de busca

    Given Eu vejo o produto pesquisado
    When Eu clico no link do produto
    Then Eu sou redirecionado para a página de detalhes do produto

    Given Eu vejo o detalhe do produto
    When Eu clico no botão adicionar ao carrinho
    And Eu clico em não adicionar cobertura
    Then Eu vejo a mensagem de adicionado ao carrinho

    Given Eu clique no botão carrinho
    And Eu vejo o título carrinho de compras
    And Eu vejo os 3 produtos no carrinho
    Then Eu exporto os dados do pedido em csv




