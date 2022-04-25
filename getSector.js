function getSector(line, row) {
  if (line >= 0 && line < 3) {
    if (row < 3) {
      return 1;
    }
    if (row < 6) {
      return 2;
    }
    if (row < 9) {
      return 3;
    }
  }
  if (line >= 3 && line < 6) {
    if (row < 3) {
      return 4;
    }
    if (row < 6) {
      return 5;
    }
    if (row < 9) {
      return 6;
    }
  }
  if (line >= 6 && line < 9) {
    if (row < 3) {
      return 7;
    }
    if (row < 6) {
      return 8;
    }
    if (row < 9) {
      return 9;
    }
  }
}
module.exports = {getSector};
