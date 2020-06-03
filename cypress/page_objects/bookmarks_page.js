var BookmarksPage = function(cy) {
    this.cy = cy

    const bookmarkButtonSelector = '.star-icon'
    const difficultyCheckboxSelector = '[data-automation="difficulty-checklist"]'
    const challengeItemSelector = '.challenge-list-item'

    this.visit = function () {
        cy.visit('https://www.hackerrank.com/challenges/bookmarks')
    }

    this.bookmark = function () {
        cy.get(bookmarkButtonSelector).first().click()

        cy.wait(3000)
    }

    this.filterByEasy = function () {
        cy.get(difficultyCheckboxSelector).first().click()

        cy.wait(3000)
    }

    this.assertBookmarksCountIs = function (expectedCount) {
        if (expectedCount == 0) {
            cy.get(challengeItemSelector).should('not.exist');
        } else {
            cy.get(challengeItemSelector).its('length').should('eq', expectedCount)
        }
    }
};

module.exports = BookmarksPage