export function roll(dice, succ) {
  let diceRolled = [];
  let explosions = 0;
  let rollCount = 0;
  let successesRolled = 0;
  while (rollCount < dice) {
    let rolled = rollSingleDie();
    diceRolled.push(rolled);
    if (rolled === 6) {
      explosions++;
      successesRolled++;
    } else if (rolled > 3) {
      rollCount++;
      successesRolled++;
    } else {
      rollCount++;
    }
  }
  const successes = successesRolled + succ;
  return {successes, diceRolled, explosions, successesRolled, bonusSuccesses: succ};
}

export function attackRoll(dice, succ, damDice, damSucc) {
  const toHit = roll(dice, succ);
  const location = locationRoll();
  let damage = roll(damDice, damSucc);
  if (!damage.successes) { damage.successes = 1; }
  damage.successes = damage.successes + location.critLevel;
  return { toHit, damage, location};
}

export function locationRoll() {
  let critLevel = 0;
  let locationHit = 0;
  while (!locationHit) {
    const result = rollSingleDie();
    if (result === 6) {
      critLevel++;
    } else {
      locationHit = result-1; // offset -1 because location list is 0 indexed
    }
  }
  return { critLevel, locationHit };
}

export function rollSingleDie() {
  return (Math.floor(Math.random() * 6) + 1);
}

