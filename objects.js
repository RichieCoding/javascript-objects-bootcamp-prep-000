var playlist = {
  ['Daniel Caesar']:  'Japenese Denim'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle})
}

updatePlaylist(playlist, 'bruno mars', 'Just the way you are')