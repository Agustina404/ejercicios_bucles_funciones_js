const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  const matchingMutants = []
  for (const mutant of mutants) {
    if (mutant.power === power) {
      matchingMutants.push(mutant.name)
    }
  }
  if (matchingMutants.length > 0) {
    console.log(
      `Found mutants with the power "${power}": ${matchingMutants.join(', ')}.`
    )
  } else {
    console.log(`I've not found any mutants with "${power}":.`)
  }
}

console.log(findMutantByPower(mutants, 'teleportation'))

// insert the desired power to look for inside the console.log
