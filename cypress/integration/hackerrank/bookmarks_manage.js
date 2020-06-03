/* let loginPage = new (require('../../page_objects/login_page.js'))(cy)
let pythonPage = new (require('../../page_objects/python_page.js'))(cy)
let challengePage = new (require('../../page_objects/challenge_page.js'))(cy)
let bookmarksPage = new (require('../../page_objects/bookmarks_page.js'))(cy) */

describe('Hacker Rank Tests', () => {
    it('Add bookmark', () => {
        let loginPage = new (require('../../page_objects/login_page.js'))(cy)
        let pythonPage = new (require('../../page_objects/python_page.js'))(cy)
        let challengePage = new (require('../../page_objects/challenge_page.js'))(cy)

        loginPage.visit()
        loginPage.fillUpForm('germanfgiunta@gmail.com', 'Pager4751')
        loginPage.submit()

        pythonPage.visit()
        pythonPage.selectFirstChallenge()

        challengePage.bookmark()
    })

    it('Filter bookmarks', () => {
        let loginPage = new (require('../../page_objects/login_page.js'))(cy)
        let bookmarksPage = new (require('../../page_objects/bookmarks_page.js'))(cy)

        loginPage.visit()
        loginPage.fillUpForm('germanfgiunta@gmail.com', 'Pager4751')
        loginPage.submit()
        
        bookmarksPage.visit()
        bookmarksPage.filterByEasy()
        bookmarksPage.assertBookmarksCountIs(1)
    })

    it('Delete bookmark', () => {
        let loginPage = new (require('../../page_objects/login_page.js'))(cy)
        let pythonPage = new (require('../../page_objects/python_page.js'))(cy)
        let challengePage = new (require('../../page_objects/challenge_page.js'))(cy)
        let bookmarksPage = new (require('../../page_objects/bookmarks_page.js'))(cy)

        loginPage.visit()
        loginPage.fillUpForm('germanfgiunta@gmail.com', 'Pager4751')
        loginPage.submit()

        pythonPage.visit()
        pythonPage.selectFirstChallenge()

        challengePage.bookmark()

        bookmarksPage.visit()
        bookmarksPage.filterByEasy()
        bookmarksPage.assertBookmarksCountIs(0)
    })
  })