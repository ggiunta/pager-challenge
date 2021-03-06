var LoginPage = function(cy) {
    this.cy = cy

    const usrInputSelector = '#input-1'
    const pwdInputSelector = '#input-2'
    const submitButtonSelector = 'Log In'

    this.visit = function () {
        cy.visit('/auth/login')
    }

    this.fillUpForm = function (usr, pwd) {
        cy.get(usrInputSelector)
        .type(usr)

        cy.get(pwdInputSelector)
        .type(pwd)
    };

    this.submit = function () {
        cy.contains(submitButtonSelector).click()

        cy.wait(5000)
    }

    this.isValidationErrorDisplayed = function () {
        cy.contains('Invalid login or password').should('be.visible')
    }
};

module.exports = LoginPage