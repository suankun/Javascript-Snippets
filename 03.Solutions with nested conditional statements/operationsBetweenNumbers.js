function operationsBetweenNumbers(input) {
  const N1 = Number(input[0]);
  const N2 = Number(input[1]);
  const operator = input[2];
  let res = 0;
  let evenOrOdd = "";

  if (N2 == 0) {
    console.log(`Cannot divide ${N1} by zero`);
  } else if (operator == "+") {
    res = N1 + N2;
    if (res % 2 == 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${res} - ${evenOrOdd}`);
  } else if (operator == "-") {
    res = N1 - N2;
    if (res % 2 == 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${res} - ${evenOrOdd}`);
  } else if (operator == "*") {
    res = N1 * N2;
    if (res % 2 == 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
    console.log(`${N1} ${operator} ${N2} = ${res} - ${evenOrOdd}`);
  } else if (operator == "/") {
    res = N1 / N2;
    console.log(`${N1} ${operator} ${N2} = ${res.toFixed(2)}`);
  } else if (operator == "%") {
    res = N1 % N2;
    console.log(`${N1} ${operator} ${N2} = ${res}`);
  }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);
