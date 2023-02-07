// Remove
const selectors = {
  searchBar: "#tablet-top-search",
  searchResults: ".Styled__ResultsDropdownView-sc-8e2mu6-1",
  searchResultSuggestions: '[data-test-id="suggested-terms"] > li',
  // searchResultSuggestions:  '.Styled__ResultsDropdownView-sc-8e2mu6-1 > :nth-child(1)', //result-dropdown-item-text
  //searchResultBrands: '[data-test-id="brands"]',
  searchResultBrands:
    ".Styled__ResultsDropdownView-sc-8e2mu6-1 > :nth-child(2)", //data-test-id=brands
  brandName:
    ":nth-child(1) > .ResultDropdownImageItem__Wrapper-sc-11gby0f-1 > .dHnlNB > .Column-sc-4nf49i-0 > .ResultDropdownImageItem__NamePara-sc-11gby0f-5",
  brandImage:
    ":nth-child(1)>.ResultDropdownImageItem__Wrapper-sc-11gby0f-1>.dHnlNB>.ResultDropdownImageItem__BrandIconWrapper-sc-11gby0f-3>.Avatar__Container-sc-32jcmg-2>.Flex-sc-14t19kd-0>.Avatar__Image-sc-32jcmg-0",
  crossButtonSignupModal: '[data-test-id="modalCloseButton"]',
  productNameOnNavigatedPage:
    "p.Styles__Typography-sc-4zz2i3-0.SearchProductsHeader__SubHeader-sc-gui52u-1.ldNIxK.jyRmmQ",
  brandNameOnNavigatedPage: "span.notranslate",
  readStoryButton: "button.Button__StyledButton-sc-11ipfap-1.bYyNRa",
  brandLogo: "img.Avatar__Image-sc-32jcmg-0.aqCdt",
};

// Methond name refactor required
export class SearchBar {
  static getSearchBar() {
    return cy.get(selectors.searchBar);
  }
  static getResults() {
    return cy.get(selectors.searchResults);
  }
  static getSuggestions() {
    return cy.get(selectors.searchResultSuggestions);
  }
  static getBrands() {
    return cy.get(selectors.searchResultBrands);
  }
  static getBrandImage() {
    return cy.get(selectors.brandImage);
  }
  static getBrandName() {
    return cy.get(selectors.brandName);
  }
  static getCrossButton() {
    return cy.get(selectors.crossButtonSignupModal);
  }
  static brandNameOnNavigatedPage() {
    return cy.get(selectors.brandNameOnNavigatedPage);
  }
  static productNameOnNavigatedPage() {
    return cy.get(selectors.productNameOnNavigatedPage);
  }
  static readStoryButton() {
    return cy.get(selectors.readStoryButton);
  }
  static brandLogo() {
    return cy.get(selectors.brandLogo);
  }
}
