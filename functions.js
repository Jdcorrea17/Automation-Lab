const {By} = require('selenium-webdriver')

const crossOffMovie = async (driver) => {
   await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu')

   await driver.findElement(By.xpath('//button')).click()

   const movie = await driver.findElement(By.xpath('//span'))

   await movie.click()
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu')

    await driver.findElement(By.xpath('(//button)[2]')).click()
 
    const ul = await driver.findElement(By.xpath('//ul'))
}

const revealMessage = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu\n')

    await driver.findElement(By.xpath('//span')).click()

    let message = await driver.findElement(By.css('#message')).getText()
    expect(message).toContain('watched')
}

module.exports = {
    crossOffMovie,
    deleteMovie,
    revealMessage
}