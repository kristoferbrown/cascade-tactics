import { attackRoll } from './diceUtils';

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
	return { attackObj, attackDice, attackSucc, damageDice, damageSucc, dodgeDice, dodgeSucc, passiveDef };
}

export function executeAttack(attacker, target, animateAttack, showAttackResults, dealDamage) {
	const currentAttack = getAttackValues(attacker, target);
	const attackResult = attackRoll(currentAttack.attackDice, currentAttack.attackSucc, currentAttack.damageDice, currentAttack.damageSucc);
	const defenseResult = currentAttack.passiveDef;
	const didHit = attackResult.toHit.successes >= defenseResult;

	animateAttack(currentAttack.attackObj, attacker, target, attackResult, () => showAttackResults(attackResult, currentAttack.attackObj, defenseResult));
	didHit && dealDamage(target.meta.charId, attackResult.damage.successes, attackResult.location.locationHit);
	console.log(didHit ? 'HIT!!!!' : 'Miss...', attackResult, defenseResult);
}