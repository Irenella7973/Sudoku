function checkNumbers(str) {
  const re = /1|2|3|4|5|6|7|8|9|-/g;
  const impotantNum = str.match(re).join('');
  const result = {};
  let possibleValue = '';
  for (let i = 0; i < impotantNum
    .length; i += 1) {
    if (result[impotantNum[i]]) {
      result[impotantNum[i]] += 1;
    } else {
      result[impotantNum[i]] = 1;
    }
  }
  for (let j = 1; j < 10; j += 1) {
    if (!(`${j}` in result)) {
      possibleValue += j;
    }
  }

  return possibleValue;
}

console.log(checkNumbers('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

module.exports = { checkNumbers };
