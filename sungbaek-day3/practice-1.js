const [openParenthesis, closeParenthesis] = [..."()"];

const solution = (s) => {
  let openCount = 0;
  for (const char of s) {
    if (char === openParenthesis) {
      openCount += 1;
    }

    if (char === closeParenthesis) {
      if (!openCount) return false;
      openCount -= 1;
    }
  }
  return !openCount;
};