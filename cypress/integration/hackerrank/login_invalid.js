describe('Hacker Rank Tests', () => {
    it('Login Invalid', () => {
        let loginPage = new (require('../../page_objects/login_page.js'))(cy)

        loginPage.visit()
        loginPage.fillUpForm('invalid_4584362@gmail.com', 'Pager4751')
        loginPage.submit()

        loginPage.isValidationErrorDisplayed()
    })
  })