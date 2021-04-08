"use strict";

let playerLife = 100;
let playerWeapon;
let playerArmor;
let gameMasterLife = 150;

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

while (!foundItems(weapon, playerWeapon) || !foundItems(armor, playerArmor)) {
  playerWeapon = prompt(
    `Choisissez votre arme : bois (inflige 2 dégats), fer (inflige 5 dégâts) ou magique (inflige 10 dégâts)`
  );
  playerArmor = prompt(
    `Choisissez votre armure : bois (protection 1 dégat), fer (protection 3 dégâts) ou magique (protection 5 dégâts)`
  );
}

function Attack() {}
