const AxeBuilder = require('axe-webdriverjs');
const WebDriver = require('selenium-webdriver');
const {getDriver} = require('./support/helpers');

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;


describe('honey-toggle-button', function () {

  let driver;


  before(done => {
    driver = getDriver();
    done();
  });

  after(done => done());

  beforeEach(done => done());

  function printReport(results) {
    if(results.violations.length >0 ) {
      results.violations.forEach(function (violation) {
        const id = violation.id;
        const description = violation.description;
        console.error(`ERR: \[${id}\] ${description}`);
      });
    }
    assert.lengthOf(results.violations, 0);
  }

  it('Prüfe initiale Darstellung', done => {
    driver
      .get('http://localhost:3000/simple-component.html')
      .then(() => AxeBuilder(driver).analyze().then((results) => {
        printReport(results);
        done();
      })
        .catch(done))
      .catch(done);

    // assert.equal( text, 'loading...');
  });


})



