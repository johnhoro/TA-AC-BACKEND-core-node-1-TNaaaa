function areaOfSquare(val) {
  return val * val;
}
function areaOfRectangle(l, b) {
  return l * b;
}
function areaOfCircle(r) {
  return 2 * 3.14 * r;
}

module.exports = {
  areaOfCircle: areaOfCircle,
  areaOfRectangle: areaOfRectangle,
  areaOfSquare: areaOfSquare,
};
