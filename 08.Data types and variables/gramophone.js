function gramophone(band, album, song) {
  const rotations = album.length * band.length * (song.length / 2);
  console.log(`The plate was rotated ${Math.ceil(rotations / 2.5)} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
