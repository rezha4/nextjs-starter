describe("CRUD tests", () => {
  beforeEach(() => cy.visit("http://localhost:3000/crud"));

  it("Create", () => {
    cy.get("input").type("lucius malfoy");
    cy.contains("button", "Create").click();
    cy.get("li").should("contain.text", "lucius malfoy");
  });

  it("Read", () => {
    cy.contains("li", "lucius malfoy").find("button").contains("view").click();

    cy.on("window:alert", (alertText) => {
      const alertData = JSON.parse(alertText);
      expect(alertData).to.have.property("name", "lucius malfoy");
    });
  });

  it("Update", () => {
    // Stub the prompt before clicking the update button
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("severus snape");
    });

    cy.contains("li", "lucius malfoy")
      .find("button")
      .contains("update")
      .click();

    cy.get("li").should("contain.text", "severus snape");
  });

  it("Delete", () => {
    cy.contains("li", "severus snape")
      .find("button")
      .contains("delete")
      .click();

    cy.contains("severus snape").should("not.exist");
  });
});
