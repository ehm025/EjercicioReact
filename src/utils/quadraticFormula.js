export const calculateQuadraticFormula = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return {
      discriminant,
      x1: x1.toFixed(2),
      x2: x2.toFixed(2),
    };
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    return {
      discriminant,
      x1: x.toFixed(2),
      x2: x.toFixed(2),
    };
  } else {
    const realPart = (-b / (2 * a)).toFixed(2);
    const imaginaryPart = (Math.sqrt(Math.abs(discriminant)) / (2 * a)).toFixed(2);
    return {
      discriminant,
      x1: `${realPart} + ${imaginaryPart}i`,
      x2: `${realPart} - ${imaginaryPart}i`,
    };
  }
};
