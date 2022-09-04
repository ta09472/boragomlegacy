function getDoneRate(arr: []) {
  let done = 0;
  arr.forEach((el) => {
    if (el.isDone === true) {
      done += 1;
    }
  });

  return done;
}

export default getDoneRate;
