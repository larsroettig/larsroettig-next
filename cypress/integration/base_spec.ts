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
});
