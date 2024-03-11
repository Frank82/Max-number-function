const max = (numbers) => {
  let result = numbers[0]

  // loop
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }

  return { result }
}


console.log(max([1, 2, 3, 4, 5, 12]))