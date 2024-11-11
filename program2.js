const decodeTheRing = function(s, p) {
  // Convert the decoder key pattern into a regular expression
  // Replace '*' with '.*' (any sequence of characters)
  // Replace '?' with '.' (exactly one character)
  const regexPattern = '^' + p.replace(/\*/g, '.*').replace(/\?/g, '.') + '$';

  // Create a regular expression from the pattern
  const regex = new RegExp(regexPattern);

  // Test if the secret message matches the pattern
  return regex.test(s);
};

module.exports = decodeTheRing;
