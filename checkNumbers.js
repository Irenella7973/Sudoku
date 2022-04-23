function checkNumbers(str) {
  const re = /1|2|3|4|5|6|7|8|9/g;
  const impotantNum = str.match(re).join('');
  let result = {};
  let possibleValue = ''
  for (let i = 0; i < impotantNum
    .length; i += 1) {
    if (result[impotantNum[i]]) {
      result[impotantNum[i]] += 1;
    } else {
      result[impotantNum[i]] = 1;
    }
  }
  for (let j = 1; j < 10; j +=1) {
    if (!(`${j}` in result)) {
    possibleValue += j;
  }}

  return possibleValue;
}

module.exports = {checkNumbers};
