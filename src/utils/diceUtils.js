export function roll(dice, succ) {
  let successesRolled = succ;
  for (let i = 0; i < dice; i++) {
    if (rollSingleDie() > 3) {successesRolled++;}
  }
  return successesRolled;
}

export function attackRoll(dice, succ, damDice, damSucc) {
  const toHit = roll(dice, succ);
  const location = locationRoll();
  const baseDamage = roll(damDice, damSucc);
  const damage = baseDamage + location.critLevel;
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

