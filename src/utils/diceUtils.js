export function roll(dice, succ) {
  let diceRolled = [];
  let explosions = 0;
  let rollCount = 0;
  let successes = succ;
  while (rollCount < dice) {
    let rolled = rollSingleDie();
    diceRolled.push(rolled);
    if (rolled === 6) {
      explosions++;
      successes++;
    } else if (rolled > 3) {
      rollCount++;
      successes++;
    } else {
      rollCount++;
    }
  }
  return {successes, diceRolled, explosions};
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
      locationHit = result;
    }
  }
  return { critLevel, locationHit };
}

export function rollSingleDie() {
  return (Math.floor(Math.random() * 6) + 1);
}

