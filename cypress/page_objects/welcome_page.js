var WelcomePage = function(cy) {
    this.cy = cy
    
    const welcomeLabelSelector = 'Welcome'

    this.isDisplayed = function () {
        cy.contains(welcomeLabelSelector)
    };
};

module.exports = WelcomePage