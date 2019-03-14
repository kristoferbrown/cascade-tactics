export function roll(dice, succ) {
  let successesRolled = succ;
  for (let i = 0; i < dice; i++) {
    if (rollSingleDie() > 3) {successesRolled++;}
  }
  return successesRolled;
}

export function attackRoll(dice, succ) {
  console.log('attack rolled', dice, succ);
}

export function locationRoll() {
  console.log('loc rolled');
}

export function rollSingleDie() {
  return (Math.floor(Math.random() * 6) + 1);
}

