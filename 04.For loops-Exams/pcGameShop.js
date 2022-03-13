function pcGameShop(input) {
  let index = 0;
  const gamesCount = Number(input[index]);
  index++;
  let hearthstone = 0;
  let fornite = 0;
  let overwatch = 0;
  let others = 0;
  for (let i = 0; i < gamesCount; i++) {
    const tempGameName = input[index];
    index++;
    switch (tempGameName) {
      case "Hearthstone":
        hearthstone++;
        break;
      case "Fornite":
        fornite++;
        break;
      case "Overwatch":
        overwatch++;
        break;
      default:
        others++;
        break;
    }
  }
  console.log(
    `Hearthstone - ${((hearthstone / gamesCount) * 100).toFixed(2)}%`
  );
  console.log(`Fornite - ${((fornite / gamesCount) * 100).toFixed(2)}%`);
  console.log(`Overwatch - ${((overwatch / gamesCount) * 100).toFixed(2)}%`);
  console.log(`Others - ${((others / gamesCount) * 100).toFixed(2)}%`);
}

pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
pcGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
