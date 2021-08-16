module.exports = function reverse (n) {
  const reversed = n.toString().split("").reverse().join("");
  let result = parseInt(reversed) * Math.sign(n);
  return Math.abs(result)         
}
