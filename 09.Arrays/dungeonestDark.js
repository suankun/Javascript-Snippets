/*
 * Function that make game
 * We have health and coins, we have to go through
 * all the rooms and fight the monsters. Their
 * damage is wrote with numbers. All the rooms are
 * separated with "|".
 * When healing the health cannot go over initial health (100).
 * - if health reach 0, the game finish and we lost.
 * - if we succeed to go through all the rooms we win.
 */

function dungeonestDark(input) {
  // Split the rooms
  let rooms = input[0].split("|");

  // Creating health and coins variables to store.
  // current result.
  let health = 100;
  let coins = 0;

  // Creating boolean flag to check if we are alive in the end of the rooms
  let isAlive = true;

  // Creating for loop to iterate through the rooms
  for (let i = 0; i < rooms.length; i++) {
    // Split the command (health, coins or monster) and number
    let currentRoom = rooms[i].split(" "); // ["rat", "10"]

    // Parse string to number
    let number = Number(currentRoom[1]);

    // Creating a logic to check all the possibilities
    if (currentRoom[0] == "potion") {
      // Check if health is over initial health (100) or less.
      if (health + number >= 100) {
        // Print the result.
        console.log(`You healed for ${100 - health} hp.`);
        health = 100;
        console.log(`Current health: ${health} hp.`);
      } else {
        health += number;

        // Print the result.
        console.log(`You healed for ${number} hp.`);
        console.log(`Current health: ${health} hp.`);
      }

      // Add amount of coins found
    } else if (currentRoom[0] == "chest") {
      coins += number;

      // Print the result.
      console.log(`You found ${number} coins.`);

      // If there is a monster in the room
    } else {
      health -= number;
      if (health <= 0) {
        // Print the result.
        console.log(`You died! Killed by ${currentRoom[0]}.`);
        console.log(`Best room: ${i + 1}`);
        isAlive = false;
        break;
      } else {
        // Print the result.
        console.log(`You slayed ${currentRoom[0]}.`);
      }
    }
  }

  // Check if we succeed to go through all the rooms
  if (isAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

// User input
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
/*
 * Output:
 * You slayed rat.
 * You slayed bat.
 * You healed for 10 hp.
 * Current health: 80 hp.
 * You slayed rat.
 * You found 100 coins.
 * You died! Killed by boss.
 * Best room: 6
 */

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
/*
 * Output:
 * You slayed cat.
 * You healed for 10 hp.
 * Current health: 100 hp.
 * You slayed orc.
 * You found 10 coins.
 * You slayed snake.
 * You found 110 coins.
 * You've made it!
 * Coins: 120
 * Health: 65
 */
