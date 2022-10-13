import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(400);

describe("testing the Webcatalog with Cypress", () => {
  it("user can visit the webcatalog", () => {
    cy.visit("http://localhost:3000/");
  });
  it("show more data from CharacterCard", () => {
    cy.scrollTo("center");
    cy.findByRole("img", { name: /character portal/i }).click();
    cy.findByRole("img", { name: /rick sanchez/i }).click();
    cy.findByRole("img", { name: /summer smith/i }).click();
    cy.get(
      "#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2)"
    ).click();
    cy.get(
      "#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(2)"
    ).click();
    cy.scrollTo("top");
    cy.findByRole("button", { name: /⬅ back to landing page/i }).click();
  });
  it("show more data from LocationCard", () => {
    cy.scrollTo("center");
    cy.findByRole("img", { name: /location portal/i }).click();
    cy.get(
      "#root > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(4) > div > div:nth-child(1)"
    ).click();
    cy.get(
      "#root > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > div > div:nth-child(1)"
    ).click();
    cy.get(
      "#root > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(2)"
    ).click();
    cy.get(
      "#root > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(5) > div > div:nth-child(2) > div > div:nth-child(2)"
    ).click();
    cy.scrollTo("top");
    cy.findByRole("button", { name: /⬅ back to landing page/i }).click();
  });
});
