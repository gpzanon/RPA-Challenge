const puppeteer = require('puppeteer');
const fetch = require('node-fetch');

const states = [
  'Estados',
  'Acre',
  'Alagoas',
  'Amazonas',
  'Amapá',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Minas Gerais',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Pará',
  'Paraíba',
  'Pernambuco',
  'Piauí',
  'Paraná',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rondônia',
  'Roraíma',
  'Rio Grande do Sul',
  'Santa Catarina',
  'Sergipe',
  'São Paulo',
  'Tocantins'];

async function rpa(record) {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto('https://seguralta.com.br/site/contato')
  await page.type('#name', `${record.Nome}`)
  await page.type('#email', `${record.Email}`)
  await page.type('#cep', `${record.CEP}`)

  // Look for the state index in relation to the input
  let state = states.indexOf(`${record.Estado}`)
  await page.select('#estado', `${state}`)

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
  await page.waitForTimeout(500);
}

module.exports.rpa = rpa;