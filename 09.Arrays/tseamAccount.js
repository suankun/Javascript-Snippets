/*
 * You are given Petes's account with all of his games -> string, separated
 * with space. Until you receive "Play!" you will be receiving commands
 * which Peter does with his account.
 * Commands:
 * Install {game} - add the game in the last position in the account, but
 * only if it isn't installed already
 * Uninstall {game} - delete the game if it exists
 * Update {game} - update the game if it is exists and put it in the last
 * possition
 * Expansion {game}-{expansion} - check if the game exists and insert after it
 * the expansion in the following format: "{game}:{expansion}".
 */

function tseamAccount(array) {
  // Creating index to increase it in the loop.
  let index = 0;

  // Receiving the account and split it by games.
  let account = array[index].split(" ");
  index++;

  // Taking first command from the array.
  let command = array[index];
  index++;

  // Creating while loop to iterate throung commands.
  while (command !== "Play!") {
    let tempCommand = command.split(" ");
    switch (tempCommand[0]) {
      // Install {game} - add the game in the last position
      // in the account, but only if it isn't installed already.
      case "Install":
        if (account.includes(tempCommand[1])) {
          break;
        } else {
          account.push(tempCommand[1]);
        }
        break;

      // Uninstall {game} - delete the game if it exists.
      case "Uninstall":
        if (account.includes(tempCommand[1])) {
          account.splice(account.indexOf(tempCommand[1]), 1);
        }
        break;

      // Update {game} - update the game if it is exists
      // and put it in the last possition.
      case "Update":
        if (account.includes(tempCommand[1])) {
          let updatedGame = account.splice(account.indexOf(tempCommand[1]), 1);
          account.push(updatedGame[0]);
        }
        break;

      // Expansion {game}-{expansion} - check if the game exists
      // and insert after it the expansion in the following
      // format: "{game}:{expansion}".
      case "Expansion":
        let expansion = tempCommand[1].split("-");
        let game = expansion[0];

        for (let i = 0; i < account.length; i++) {
          if (account[i] === game) {
            let expandedGame = expansion.join(":");
            account.splice(i + 1, 0, expandedGame);
            break;
          }
        }
        break;
    }

    // Rewrite the command variable.
    command = array[index];
    index++;
  }

  // Print the result.
  console.log(account.join(" "));
}

// User input.
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]); // CS CS:Go LoL Diablo
