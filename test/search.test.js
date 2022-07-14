const expect = require("chai").expect

Feature('search');

Scenario('search for BDD', async ({ I }) => {
        I.amOnPage('/')
        I.seeElement("img[alt='Google']")
    
        I.fillField('input', 'BDD')
        I.pressKey('Enter')

        I.waitForNavigation()
        let items = await I.grabTextFromAll('a h3')
        expect(items.some(x => x.includes('Behavior-driven development')), items).to.be.true
});
