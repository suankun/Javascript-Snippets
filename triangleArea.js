function triangleArea(side1, side2, side3) {
  const semiPerimeter = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );
  console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
