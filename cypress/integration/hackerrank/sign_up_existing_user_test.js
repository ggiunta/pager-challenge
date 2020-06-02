describe('Hacker Rank Tests', () => {
    it('Sign Up Invalid', () => {
        let signUpPage = new (require('../../page_objects/sign_up_page.js'))(cy)
        
        let randomString = Cypress._.random(0, 1e6)

        signUpPage.visit()
        signUpPage.fillUpForm(randomString, randomString, 'germanfgiunta', randomString)

        signUpPage.isValidationErrorDisplayed()
    })
  })