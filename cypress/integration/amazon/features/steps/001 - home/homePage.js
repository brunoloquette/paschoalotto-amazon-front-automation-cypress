import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../pages/home.page';

Given(`Eu acesso a página`, () => {
    HomePage.visit();
});

And(`Eu estou na página inicial`, () => {
    HomePage.assertsInPage();
});

When(`Eu digito na caixa de busca {string}`, (product) => {
    HomePage.setSearch(product);
});

Then(`Eu clico em pesquisar na caixa de busca`, () => {
    HomePage.clikSearch();
});

Given(`Eu vejo o produto pesquisado`, () => {
    HomePage.seeProduct();
});

When(`Eu clico no link do produto`, () => {
    HomePage.clickProduct();
});

Then(`Eu sou redirecionado para a página de detalhes do produto`, () => {
    HomePage.productDetails();
});

Given(`Eu vejo o detalhe do produto`, () => {
    HomePage.seeProductDetails();
});

When(`Eu clico no botão adicionar ao carrinho`, () => {
    HomePage.clickAddToCart();
});

And(`Eu clico em não adicionar cobertura`, () => {
    HomePage.clickNotAddCoverage();
});

Then(`Eu vejo a mensagem de adicionado ao carrinho`, () => {
    HomePage.assertAddToCart();
});

Given(`Eu clique no botão carrinho`, () => {
    HomePage.clickButtoncart();
});

And(`Eu vejo o título carrinho de compras`, () => {
    HomePage.assertCar();
});

And(`Eu vejo os 3 produtos no carrinho`, () => {
    HomePage.assertProduct();
});

Then(`Eu exporto os dados do pedido em csv`, () => {
    HomePage.exportCsv();
});
