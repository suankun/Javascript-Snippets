function salary(input) {
  let index = 0;
  let tabs = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  const facebook = 150;
  const instagram = 100;
  const reddit = 50;
  for (let i = 0; i < tabs; i++) {
    let website = input[index];
    index++;
    switch (website) {
      case "Facebook":
        money -= facebook;
        break;
      case "Instagram":
        money -= instagram;
        break;
      case "Reddit":
        money -= reddit;
        break;
    }
  }
  if (money > 0) {
    console.log(money);
  } else {
    console.log(`You have lost your salary.`);
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
