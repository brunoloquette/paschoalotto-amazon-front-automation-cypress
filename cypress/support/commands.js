import "cypress-localstorage-commands";

Cypress.Commands.add('logger', (msg, error) => {

    if (error) {
        console.log(`${msg} error=${JSON.stringify(error)}`);
        Cypress.log({
            name: msg,
            message: JSON.stringify(error)
        });
    } else {
        console.log(`${msg}`);
        Cypress.log({ name: msg });
    }
});
