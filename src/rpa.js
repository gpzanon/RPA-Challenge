const puppeteer = require('puppeteer');
const fetch = require('node-fetch');

async function rpa(record) {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto('https://seguralta.com.br/site/contato')
  await page.type('#name', `${record.Nome}`)
  await page.type('#email', `${record.Email}`)
  await page.type('#cep', `${record.CEP}`)

  // Check the city from the zip code
  const searchState = async () => {
    for (let i = 1; i <= 27; i++) {
      const state = await page.$eval(`#estado > option:nth-child(${i}n)`, (element) => {
        return element.innerHTML
      })
      if (state === record.Estado) {
        i--;
        await page.select('#estado', `${i}`)
        break;
      }
    }
  };
  searchState();
  await page.waitForTimeout(300);

  // Check the city from the zip code
  const searchCity = async () => {
    const cityData = await fetch(`https://viacep.com.br/ws/${record.CEP}/json/`);
    const cityInfo = await cityData.json();
    const city = cityInfo.localidade;
    await page.select('#cidade', `${city}`)
  }
  searchCity();

  await page.type('#assunto', `${record.Assunto}`)
  await page.type('#telefone', `${record.Telefone}`)
  await page.type('#mensagem', `${record.Mensagem}`)
  await page.click('#formcontato > div:nth-child(5) > div:nth-child(2) > input');
  await page.waitForNavigation()

  const success = await page.$eval(`body > div:nth-child(5) > div:nth-child(2) > div.container.content > div.col-xs-12.col-sm-12.col-md-8 > div > h1 > strong`, (element) => {
    return element.innerHTML
  })
  record['Retorno'] = success;

}

module.exports.rpa = rpa;