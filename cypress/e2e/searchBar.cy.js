import { SearchBar } from "../pages/searchBar";

const SEARCH_TERM = "perfume";

describe("Search Suggestions", () => {
  beforeEach(() => {
    cy.intercept("GET", "/").as("landingPage");
    cy.intercept("POST", "/api/v2/search/suggestions").as("searchSuggestions");
    cy.intercept("GET", "/api/alert-banner?page_type=DEFAULT").as("signupPage");
    cy.visit("/");
    cy.wait("@landingPage").its("response.statusCode").should("eq", 301);
    SearchBar.getSearchBar().type(SEARCH_TERM, { delay: 200 });
    SearchBar.getSearchBar().should("have.value", SEARCH_TERM);
    cy.wait("@searchSuggestions").its("response.statusCode").should("eq", 200);
  });

  it.only("Given search term in the search bar, should return relevant suggestions and brands", () => {
    SearchBar.getSuggestions().each(($el) => {
      cy.wrap($el).find(`span:contains(${SEARCH_TERM})`).should("exist");
    });

    SearchBar.getBrands().should("exist");
    cy.get('[data-test-id="brands"]').each(($li) => {
      cy.wrap($li).find("img").should("exist");
      cy.wrap($li)
        .find(`p[class^="ResultDropdownImageItem__NamePara"]`)
        .should("not.be.empty");
    });
  });

  it("Verify if the search result navigates to respective page: Suggestion category", () => {
    SearchBar.getSuggestions().click();
    cy.url().should("contain", SEARCH_TERM);
    cy.wait("@signupPage").its("response.statusCode").should("eq", 204);
    SearchBar.crossButton().click();
    SearchBar.getSearchBar().invoke("val").as("brandName");
    cy.get("@brandName").then((brandName) => {
      SearchBar.productNameOnNavigatedPage().should("contain", brandName);
    });
  });

  it("Verify if the search result navigates to respective page: Brand category", () => {
    SearchBar.searchResultBrands().click();
    cy.url().should("contain", "brand");
    cy.wait("@signupPage").its("response.statusCode").should("eq", 204);
    SearchBar.crossButton().click();
    SearchBar.brandNameOnNavigatedPage().should(
      "contain",
      "Perfume Art Creation"
    );
    SearchBar.brandLogo().should("exist");
    SearchBar.readStoryButton().should("exist");
  });
});
