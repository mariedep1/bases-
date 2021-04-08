"use strict";

let playerLife = 100;
let playerWeapon;
let playerArmor;
let gameMasterLife = 150;
let gmArmor = 4;
let gmWeapon = 6;

const WOOD = "bois";
const IRON = "fer";
const MAGIC = "magique";

let weapon = [
  [WOOD, 2],
  [IRON, 5],
  [MAGIC, 10],
];
let armor = [
  [WOOD, 1],
  [IRON, 3],
  [MAGIC, 5],
];

function foundItems(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == item) {
      return true;
    }
  }
  return false;
}

function findDamage(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == item) {
      return array[i][1];
    }
  }
}

function attackGm() {
  let attack;
  let damage;
  attack = findDamage(armor, playerArmor) - gmWeapon;
  if (Math.sign(attack) > 0) {
    console.log(
      `Le maître du donjon vous a ataqué. Aucun dégât vous a été infligé. Il vous reste ${playerLife} points de vie.`
    );
  } else {
    damage = Math.abs(attack);
    playerLife -= damage;
    console.log(
      `Le maître du donjon vous a infligé ${damage} dégâts. Il vous reste ${playerLife} points de vie.`
    );
  }
  damage = 0;
  attack = 0;
}

function attackPlayer() {
  let attack;
  let damage;
  attack = gmArmor - findDamage(weapon, playerWeapon);
  if (playerLife > 0) {
    if (Math.sign(attack) > 0) {
      console.log(
        `Vous avez attaqué le maître du donjon. Aucun dégât ne lui a été infligé. Il lui reste ${gameMasterLife} points de vie.`
      );
    } else {
      damage = Math.abs(attack);
      gameMasterLife -= damage;
      console.log(
        `Vous avez attaqué le maître du donjon. Vous lui avez infligé ${damage} dégât. Il lui reste ${gameMasterLife} points de vie.`
      );
    }
    damage = 0;
    attack = 0;
  }
}
while (gameMasterLife > 0 && playerLife > 0) {
  while (!foundItems(weapon, playerWeapon) || !foundItems(armor, playerArmor)) {
    playerWeapon = prompt(
      `Choisissez votre arme : bois (inflige 2 dégats), fer (inflige 5 dégâts) ou magique (inflige 10 dégâts)`
    );
    playerWeapon = playerWeapon.toLowerCase();
    playerArmor = prompt(
      `Choisissez votre armure : bois (protection 1 dégat), fer (protection 3 dégâts) ou magique (protection 5 dégâts)`
    );
    playerArmor = playerArmor.toLowerCase();
  }
  if (gameMasterLife > 0 && playerLife > 0) {
    attackGm();
    attackPlayer();
  }
}
if (gameMasterLife > 0 && playerLife <= 0) {
  console.log("Vous avez perdu");
} else if (gameMasterLife <= 0 && playerLife > 0) {
  console.log("vous avez gagné");
}
