//spotify data (updated everyday)
//library ideas (bookmarked 3/14/22)
//randomly selects a song
function getRandomSongIndex() {
  var songList = getColumn("music", "Track Name");
  var index = randomNumber(0, songList.length - 1);
  return index;
}
//gets song
function getSong(index) {
  var songList = getColumn("music", "Track Name");
  var name = songList[index];
  return name;
}
//gets song position
function getSongPosition(index) {
  var songPosition = getColumn("music", "Position");
  var position = songPosition[index];
  return position;
}
//gets song artist
function getSongArtist(index) {
  var songArtist = getColumn("music", "Artist");
  var artist = songArtist[index];
  return artist;
}
//gets song position through user input
function getPosition(guess, index) {
  var correct = false;
  var allPositions = getColumn("music", "Position");
  if (guess == allPositions[index]) {
    correct = true;
  }
  return correct;
}

getRandomSongIndex();
getSong();
getSongPosition();
getSongArtist();
getPosition();