describe("SITIO WEB DE TWITTER", () => {
  it("Deberia publicar el post en la lista y visualizarlo", () => {
    cy.visit("/");
    cy.get("#texto").type("'Hola mundo'");
    cy.get("#button").click();
    cy.get("#publicacion-div").should("contain", "'Hola mundo'");
  });

  it("Deberia mandar un mensaje de texto si esta vacio y visualizarlo", () => {
    cy.visit("/");
    cy.get("#texto").type(" ");
    cy.get("#button").click();
    cy.get("#publicacion-div").should("contain", "'No se puede ingresar un post sin texto'");
  });
});
