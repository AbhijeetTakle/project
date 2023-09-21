function generateEvent(arr, eventCount) {
  arr.sort(function (a, b) {
    return a.probability - b.probability;
  });

  let outcomeCounts = [];
  for (let i = 0; i < eventCount; i++) {
    const randNum = Math.random() * 100;
    let cumulativeProb = 0;
    for (const outcome of arr) {
      cumulativeProb += outcome.probability;
      if (randNum < cumulativeProb) {
        const selectedOutcome = outcome.outcome;
        outcomeCounts[selectedOutcome] =
          (outcomeCounts[selectedOutcome] || 0) + 1;
        break;
      }
    }
  }
}

function submission(e) {
  e.preventDefault();
  console.log(e.target);
}

generateEvent(
  [
    { outcome: 1, probability: 10 },
    { outcome: 2, probability: 30 },
    { outcome: 3, probability: 25 },
    { outcome: 4, probability: 15 },
    { outcome: 5, probability: 20 },
    { outcome: 6, probability: 0 },
  ],
  100
);
