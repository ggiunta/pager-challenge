describe('Hacker Rank Tests', () => {
    it('Login', () => {
        let loginPage = new (require('../../page_objects/login_page.js'))(cy)

        let data = require('../../data/data.json')

        
        loginPage.visit()
        loginPage.fillUpForm(data.validUser.user, data.validUser.password)
        loginPage.submit()
    })
  })