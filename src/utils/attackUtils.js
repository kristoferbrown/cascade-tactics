export function getAttackValues(attacker, target) {
	const attackObj = attacker.currentAttack;
	const attackDice = attacker.attributes[attackObj.attribute];
	const attackSucc = attacker.skills[attackObj.skill];
	const isRanged = attackObj.attribute === 'Perception';
	const damageDice = !isRanged ? attacker.attributes.Strength+attackObj.damDiceBonus : attackObj.damDiceBonus;
	const damageSucc = attackObj.damSuccBonus;
	let passiveDef;
	let dodgeDice;
	let dodgeSucc;
	if (target) {
		passiveDef = target.skills.Defense > 0 ? target.skills.Defense : 1;
		dodgeDice = (isRanged ? target.attributes.Wits : target.attributes.Agility)+target.skills.Defense;
		dodgeSucc = target.skills.Defense;
	}
console.log('grabbing attack for ', attacker, target)
	return { attackObj, attackDice, attackSucc, damageDice, damageSucc, dodgeDice, dodgeSucc, passiveDef };
}
