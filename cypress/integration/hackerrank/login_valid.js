describe('Hacker Rank Tests', () => {
    it('Login', () => {
        let loginPage = new (require('../../page_objects/login_page.js'))(cy)

        loginPage.visit()
        loginPage.fillUpForm('germanfgiunta@gmail.com', 'Pager4751')
        loginPage.submit()
    })
  })