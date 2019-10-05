module.exports = function zeros(expression) {
  function getDivisors(num) {
    const divisorsArr = [];

    for (let i = 2; i <= num && num > 1; i++) {
      while (!(num % i)) {
        divisorsArr.push(i);
        num /= i;
      }
    }

    return divisorsArr;
  }

  const multiplierArr = expression.split('*');
  let twos = 0;
  let fives = 0;
  multiplierArr.forEach(el => {
    let doubleFact = false;
    if (el.slice(-2) === '!!') doubleFact = true;
    for (let i = +el.slice(0, el.indexOf('!')); i > 1; i -= (doubleFact ? 2 : 1)) {
      let divisors = getDivisors(i)
      twos += divisors.filter(el => el === 2).length;
      fives += divisors.filter(el => el === 5).length;
    }
  })
  return Math.min(twos, fives);
}