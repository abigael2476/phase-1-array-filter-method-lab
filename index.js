// Code your solution here
// index.js

// 1. Case insensitive match of driver names
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// 2. Fuzzy match (driver names that start with provided letters)
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// 3. Match objects by name property
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

// Export functions for testing
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName,
};
