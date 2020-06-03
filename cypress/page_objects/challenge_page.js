var ChallengePage = function(cy) {
    this.cy = cy

    const bookmarkButtonSelector = '.star-icon'

    this.bookmark = function () {
        cy.get(bookmarkButtonSelector).first().click()
    }
};

module.exports = ChallengePage