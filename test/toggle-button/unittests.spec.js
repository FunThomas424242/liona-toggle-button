//const showroom = require('showroom/puppeteer')({headless:true})
//const expect = require('expect-puppeteer');
//const assert = require('assert')
//const mocha = require('mocha')

// browser,page,context und expect werden deklariert durch die jest-pupeteer umgebung

const timeout = 10000;

describe('honey-toggle-button', () => {

    beforeAll(async () => {
        await page.goto('https://google.com');
    }, timeout);

    afterAll(async () => {

    });

//    beforeEach( async ()=> {
//        try{
//            const component = await showroom.setTestSubject('honey-toggle-button');
//             assert.ok( component);
//
//            console.log('### testobject gesetzt');
//        }catch(e){
//            console.log('### exception: '+e);
//        }
//    })

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('Google-Suche');
    }, timeout);

    test('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('Google-Suche')
    })

    test('two plus two is four', () => {
      expect(2 + 2).toBe(4);
    });

//    test('Prüfe initiale Darstellung', async () => {
//        console.log('### teste...');
//
//        const buttonLoading =  await showroom.find('// button');
//        const text =  await showroom.getTextContent(buttonLoading);
//        assert.strictEqual( text, 'loading...' );
//        const attrToggled = await showroom.getAttribute('toggled');
//        assert.ifError(attrToggled);
//
//
//        const innerButton =  await showroom.utils.find('// button');
//        assert.ok(innerButton);
//        await innerButton.click();
//        const attrToggled1 = await showroom.utils.getAttribute('toggled');
////        assert.ok(attrToggled1);
//
//    })

}, timeout)