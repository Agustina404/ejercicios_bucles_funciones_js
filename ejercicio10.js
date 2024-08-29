const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  const capital = capitals[country]
  if (capital) {
    return `The capital of ${country} is ${capital}.`
  } else {
    return `I don't know the capital of ${country}.`
  }
}

const args = process.argv.slice(2)
const country = args[0]

if (country) {
  console.log(getCapital(country))
} else {
  console.log('Please provide a country name.')
}
