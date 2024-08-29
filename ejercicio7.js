const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

let rock = []
let metal = []
let pop = []
let country = []
let grunge = []

for (let i = 0; i < tracks.length; i++) {
  if (tracks[i].genre === 'Rock') {
    rock.push(tracks[i])
  } else if (tracks[i].genre === 'Metal') {
    metal.push(tracks[i])
  } else if (tracks[i].genre === 'Pop') {
    pop.push(tracks[i])
  } else if (tracks[i].genre === 'Country') {
    country.push(tracks[i])
  } else if (tracks[i].genre === 'Grunge') {
    grunge.push(tracks[i])
  }
}

console.log('canciones de rock:', rock)
console.log('canciones de metal:', metal)
console.log('canciones de pop:', pop)
console.log('canciones de country:', country)
console.log('canciones de grunge:', grunge)
