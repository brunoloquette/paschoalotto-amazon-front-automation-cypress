class homePage {
    visit() {
        cy.visit('/');
    }

    assertsInPage() {
        return cy
            .url()
            .should('eq', 'https://www.amazon.com.br/');
    }

    setSearch(product) {
        return cy   
            .get('#twotabsearchtextbox')
            .should('be.visible')
            .should('have.length', 1)
            .clear()
            .type(product)
            .invoke('val')
            .should('eq', product)
    }

    clikSearch() {
        return cy
            .xpath('//*[@id="nav-search-submit-button"]')
            .should('be.visible')
            .should('have.length', 1)
            .click();
    }

    seeProduct() {
        return cy
            .xpath('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[2]/div/span/div/div/div[2]/div[1]/h2/a/span')
            .should('be.visible')
            .should('have.length', 1)
    }
    
    productDetails() {
        return cy
            .get('#productTitle')
            .should('be.visible')
            .should('have.length', 1)
            .click();
    }
    
    seeProductDetails() {
        return cy
            .get('#productTitle')
            .should('be.visible')
            .should('have.length', 1)
            .click();
    }

    assertSearch() {
        return cy
            .xpath('/html/body/header/div[2]/div[2]/div[1]/div[2]/div/div[2]/div')
            .should('be.visible')
            .should('have.length', 1)
            .should('contains.text', 'Produtos sugeridos')
    }

    clickProduct() {
        return cy
            .xpath('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[2]/div/span/div/div/div[2]/div[1]/h2/a/span')
            .should('be.visible')
            .should('have.length', 1)
            .click();
    }

    clickAddToCart() {
        cy
            .xpath('//*[@id="add-to-cart-button"]')
            .should('be.visible')
            .should('have.length', 1)
            .invoke('val')
            .should('eq', 'Adicionar ao carrinho');

        return cy
            .xpath('//*[@id="add-to-cart-button"]')
            .click();
    }

    clickNotAddCoverage() {
        cy
            .xpath('//*[@id="attachSiNoCoverage-announce"]')
            .should('have.length', 1)
            .should('contains.text', ' Não, obrigado(a) ');

        cy
            .xpath('//*[@id="attachSiNoCoverage"]/span/input')
            .should('be.visible')
            .should('have.length', 1);

        return cy
            .xpath('//*[@id="attachSiNoCoverage"]/span/input')
            .click();
    }
    
    clickProduct() {
        return cy
            .xpath('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[2]/div/span/div/div/div[2]/div[1]/h2/a/span')
            .should('be.visible')
            .should('have.length', 1)
            .click();
    }
    
    assertAddToCart() {
        return cy
            .xpath('//*[@id="huc-v2-order-row-confirm-text"]/h1')
            .should('be.visible')
            .should('have.length', 1)
            .should('contains.text', 'Adicionado ao carrinho')
            .click();
    }
    clickButtoncart() {
        return cy
        .xpath('//*[@id="hlb-view-cart-announce"]')
        .should('be.visible')
        .should('have.length', 1)
        .should('contains.text', 'Carrinho')
        .click();
    }
    
    assertCar() {
        return cy
            .xpath('/html/body/div[1]/div[4]/div/div[3]/div/div[2]/div[1]/div/div/div/h1')
            .should('be.visible')
            .should('have.length', 1)
            .should('contains.text', 'Carrinho de compras')
            .click();
    }
    
    assertProduct() {
        return cy
            .xpath('//*[@id="sc-subtotal-label-activecart"]')
            .should('be.visible')
            .should('have.length', 1)
            .should('contains.text', 'Subtotal  (3 itens):')
            .click();
    }
}


export default new homePage();