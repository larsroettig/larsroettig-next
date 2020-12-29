/// <reference types="Cypress" />

describe(`basetest`, () => {
  it(`has home page`, () => {
    cy.visit(`/`);
    cy.contains(`h1`, `Hi, I'm Lars Roettig`);
  });

  it(`has Imprint page`, () => {
    cy.visit(`/`);
    cy.contains(`a`, `Imprint`).should(`be.visible`).click();
    cy.location(`pathname`).should(`equal`, `/imprint`);
    cy.get(`[data-cy=logo]`).click();
    cy.location(`pathname`).should(`equal`, `/`);
  });

  it(`has Privacy Statement`, () => {
    cy.visit(`/`);
    cy.contains(`a`, `Privacy Statement`).should(`be.visible`).click();
    cy.location(`pathname`).should(`equal`, `/privacy-statement`);
  });

  it(`has mdx Page`, () => {
    cy.visit(`/getting-started-with-magento-pwa-studio`);
    cy.contains(`h1`, `Getting started with Magento PWA Studio`).should(
      `be.visible`,
    );
    cy.get('.copy-button');
  });

  it(`has rss feed`, () => {
    cy.request(`/rss.xml`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain(
        `Getting started with Magento PWA Studio`,
      );
    });
  });

  it(`no cookies`, () => {
    cy.visit(`/`);
    cy.getCookies().should(`have.length`, 0);
  });
});
