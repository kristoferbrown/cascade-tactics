import { attackRoll } from './diceUtils';

export function getAttackValues(attacker, isLeftAttack, target) {
	const attackObj = isLeftAttack ? attacker.attacks.left : attacker.attacks.right;
	if (!attackObj) { return null; }
	const attackDice = attacker.attributes[attackObj.attribute];
	const attackSucc = attacker.skills[attackObj.attribute][attackObj.skill];
	const isRanged = attackObj.attribute === 'Perception';
	const damageDice = !isRanged ? attacker.attributes.Strength+attackObj.damDiceBonus : attackObj.damDiceBonus;
	const damageSucc = attackObj.damSuccBonus;
	let passiveDef;
	let dodgeDice;
	let dodgeSucc;
	if (target) {
		passiveDef = target.skills.Agility.Defense > 0 ? target.skills.Agility.Defense : 1;
		dodgeDice = (isRanged ? target.attributes.Wits : target.attributes.Agility)+target.skills.Agility.Defense;
		dodgeSucc = target.skills.Agility.Defense;
	}
	return { attackObj, attackDice, attackSucc, damageDice, damageSucc, dodgeDice, dodgeSucc, passiveDef };
}

export function executeAttack(attacker, target, animateAttack, showAttackResults, dealDamage, isLeftAttack) {
	const currentAttack = getAttackValues(attacker, isLeftAttack, target);
	const attackResult = attackRoll(currentAttack.attackDice, currentAttack.attackSucc, currentAttack.damageDice, currentAttack.damageSucc);
	const defenseResult = currentAttack.passiveDef;
	const didHit = attackResult.toHit.successes >= defenseResult;

	animateAttack(currentAttack.attackObj, attacker, target, attackResult, () => showAttackResults(attackResult, currentAttack.attackObj, defenseResult));
	didHit && dealDamage(target.meta.charId, attackResult.damage.successes, attackResult.location.locationHit);
	console.log(didHit ? 'HIT!!!!' : 'Miss...', attackResult, defenseResult);
	return {attackResult, attackUsed: currentAttack.attackObj, defenseResult};
}