import { parse } from 'json2csv';

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

    exportCsv() {
        const site = Cypress.config('baseUrl');

        cy.get('#activeCartViewForm').then(ele => {
            const productName1 = ele.find('div.a-section.a-spacing-mini.sc-list-body.sc-java-remote-feature > div:nth-child(3) > div.sc-list-item-content > div > div.a-column.a-span10 > div > div > div.a-fixed-left-grid-col.a-col-right > ul > li:nth-child(1) > span > a > span.a-size-medium.a-color-base.sc-product-title > span > span.a-truncate-cut');
            const productPrice1 = ele.find('div.a-section.a-spacing-mini.sc-list-body.sc-java-remote-feature > div:nth-child(3) > div.sc-list-item-content > div > div.a-column.a-span2.a-text-right.sc-item-right-col.a-span-last > p.a-spacing-mini > span');
            const productName2 = ele.find('div.a-section.a-spacing-mini.sc-list-body.sc-java-remote-feature > div:nth-child(4) > div.sc-list-item-content > div > div.a-column.a-span10 > div > div > div.a-fixed-left-grid-col.a-col-right > ul > li:nth-child(1) > span > a > span.a-size-medium.a-color-base.sc-product-title > span > span.a-truncate-cut');
            const productPrice2 = ele.find('div.a-section.a-spacing-mini.sc-list-body.sc-java-remote-feature > div:nth-child(4) > div.sc-list-item-content > div > div.a-column.a-span2.a-text-right.sc-item-right-col.a-span-last > p.a-spacing-mini > span');
            const productName3 = ele.find('div.a-section.a-spacing-mini.sc-list-body.sc-java-remote-feature > div:nth-child(5) > div.sc-list-item-content > div > div.a-column.a-span10 > div > div > div.a-fixed-left-grid-col.a-col-right > ul > li:nth-child(1) > span > a > span.a-size-medium.a-color-base.sc-product-title > span > span.a-truncate-cut');
            const productPrice3 = ele.find('div.a-section.a-spacing-mini.sc-list-body.sc-java-remote-feature > div:nth-child(5) > div.sc-list-item-content > div > div.a-column.a-span2.a-text-right.sc-item-right-col.a-span-last > p.a-spacing-mini > span');

            const data = [];
            console.log(productName1);
            console.log(productPrice1);
            data.push({
                Site_de_compras: site,
                Nome_do_produto: productName1.text(),
                Valor_a_vista: productPrice1.text()
            });

            data.push({
                Site_de_compras: site,
                Nome_do_produto: productName2.text(),
                Valor_a_vista: productPrice2.text()
            });

            data.push({
                Site_de_compras: site,
                Nome_do_produto: productName3.text(),
                Valor_a_vista: productPrice3.text()
            });

            return cy.writeFile('export/resultado.csv', parse(data));
        });
    }
}

export default new homePage();