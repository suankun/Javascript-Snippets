function easterBake(input) {
  let index = 0;
  const cakePcs = Number(input[index]);
  index++;
  let sugar = 0;
  let flour = 0;
  let maxSugar = 0;
  let maxFlour = 0;
  for (let i = 0; i < cakePcs; i++) {
    let tempSugar = Number(input[index]);
    index++;
    let tempFlour = Number(input[index]);
    index++;
    sugar += tempSugar;
    flour += tempFlour;
    if (tempSugar > maxSugar) {
      maxSugar = tempSugar;
    }
    if (tempFlour > maxFlour) {
      maxFlour = tempFlour;
    }
  }
  console.log(`Sugar: ${Math.ceil(sugar / 950)}`);
  console.log(`Flour: ${Math.ceil(flour / 750)}`);
  console.log(
    `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
  );
}

easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
