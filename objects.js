var playlist = {
  Daniel: 'Japenese Denim'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle})
}