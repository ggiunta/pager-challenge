describe('Hacker Rank Tests', () => {
    it('Sign Up', () => {
        let signUpPage = new (require('../../page_objects/sign_up_page.js'))(cy)
        let welcomePage = new (require('../../page_objects/welcome_page.js'))(cy)
        
        let randomString = Cypress._.random(0, 1e6)

        signUpPage.visit()
        signUpPage.signUp(randomString, randomString, randomString, randomString)

        welcomePage.isDisplayed()
    })
  })