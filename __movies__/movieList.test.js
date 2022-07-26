const { Builder, Capabilities } = require("selenium-webdriver")

const {deleteMovie, crossOffMovie, revealMessage} = require('../functions.js')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5502/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('cross off movie', async () => {
    await crossOffMovie(driver)

    await driver.sleep(5000)
})

test('delete movie', async () => {
    await deleteMovie(driver)

    await driver.sleep(5000)
    expect(ul.hasChildren).toBeFalsy()
})

test('reveal message', async () => {
    await revealMessage(driver)

    await driver.sleep(5000)
})