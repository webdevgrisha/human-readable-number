const numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(num) {
  const resultArr = [];
  let currentNum = num;

  if(num in numbers) return numbers[num];

  for(let iterationNum = 0; currentNum !== 0; iterationNum++) {
    let numStringRep = '';
    const reminder = currentNum % 10;

    currentNum = Math.floor(currentNum / 10);

    if(reminder === 0) continue;

    const clearNum = reminder * (10 ** iterationNum);
    

    if(iterationNum === 2) {
      numStringRep = `${numbers[reminder]} hundred`;
    } else {
      numStringRep = numbers[clearNum];
    }

    resultArr.push(numStringRep);
  }

  if(num > 100) {
    let reminder = num % 100;
    reminder >= 11 && reminder < 20 ? resultArr.splice(0, 2, numbers[reminder]) : null;
  }

  return resultArr.reverse().join(' ');
};