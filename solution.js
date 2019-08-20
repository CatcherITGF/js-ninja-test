function findWord(text, data) {
  const reverseText = text.split("").reverse().join("");

  for (let i = 0; i < data[0].length; i++) {
    let verticalString = "";
    for (let j = 0; j < data.length; j++) {
      const horizontalString = data[j].join("");

      verticalString += horizontalString[i];

      const horizontalSearch = horizontalString.includes(text) || horizontalString.includes(reverseText);
      const verticalSearch = verticalString.includes(text) || verticalString.includes(reverseText);

      if (horizontalSearch || verticalSearch) {
        return true;
      }
    }
    verticalString = "";
  }

  return false;
}
