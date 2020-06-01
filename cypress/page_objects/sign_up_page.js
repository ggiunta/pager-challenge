var SignUpPage = function(cy) {
    this.cy = cy

    const fullNameInputSelector = '#input-1'
    const emailInputSelector = '#input-2'
    const pwdInputSelector = '#input-3'
    const submitButtonSelector = 'Create'

    this.visit = function () {
        cy.visit('https://www.hackerrank.com/auth/signup?h_l=body_middle_left_button&h_r=sign_up')
    }

    this.signUp = function (firstName, lastName, email, pwd) {
        cy.get(fullNameInputSelector)
        .type(firstName + ' ' + lastName)

        cy.get(emailInputSelector)
        .type(email + '@gmail.com')

        cy.get(pwdInputSelector)
        .type(pwd + 'fakepwd')

        cy.contains(submitButtonSelector).click()
    };
};

module.exports = SignUpPage