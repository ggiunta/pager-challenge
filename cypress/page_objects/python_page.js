var PythonPage = function(cy) {
    this.cy = cy

    const recommendedChallengeSelector = '.recommended-challenge'

    this.visit = function () {
        cy.visit('https://www.hackerrank.com/domains/python')
    }

    this.selectFirstChallenge = function () {
        cy.get(recommendedChallengeSelector).first().click()
    }
};

module.exports = PythonPage