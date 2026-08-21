/* eslint-env cypress */

describe("Portfolio happy path", () => {
  it("navigates core pages and submits the contact form", () => {
    cy.visit("/");
    cy.contains("Welcome to Athavan's Portfolio").should("be.visible");

    cy.get(".nav-links").contains("Projects").click();
    cy.url().should("include", "/projects");
    cy.contains("My Projects").should("be.visible");

    cy.get(".nav-links").contains("Contact").click();
    cy.url().should("include", "/contact");
    cy.contains("Contact Me").should("be.visible");

    cy.intercept("POST", `${Cypress.env("apiUrl")}/contacts`, {
      statusCode: 201,
      body: { message: "created" },
    }).as("createContact");

    cy.get('input[name="firstname"]').type("Test");
    cy.get('input[name="lastname"]').type("User");
    cy.get('input[name="email"]').type("test@example.com");
    cy.get(".contact-form").submit();

    cy.wait("@createContact");
    cy.contains("Message sent successfully!").should("be.visible");
    cy.wait(1600);
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });
});

