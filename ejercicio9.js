const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

let oldMan = xMen[0]

function findOldestXMen(xMen) {
  for (const man of xMen) {
    if (man.year < oldMan.year) {
      oldMan = man
    }
  }
}

findOldestXMen(xMen)
console.log('El xMen más viejo es:', oldMan)
