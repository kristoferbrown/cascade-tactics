export function roll(dice, succ) {
  let successes = succ;
  let diceRolled = [];
  for (let i = 0; i < dice; i++) {
    const rolled = rollSingleDie();
    diceRolled.push(rolled);
    if (rolled > 3) {successes++;}
  }
  return {successes, diceRolled};
}

export function attackRoll(dice, succ, damDice, damSucc) {
  const toHit = roll(dice, succ);
  const location = locationRoll();
  let damage = roll(damDice, damSucc);
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
      locationHit = result;
    }
  }
  return { critLevel, locationHit };
}

export function rollSingleDie() {
  return (Math.floor(Math.random() * 6) + 1);
}

