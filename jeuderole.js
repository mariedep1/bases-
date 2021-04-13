"use strict";

const WOOD = "bois";
const IRON = "fer";
const MAGIC = "magique";

let adventurer = {
  hp: 100,
  armor: "",
  weapon: "",
  gold: 100,
  potions: "",
};

let dungeonMaster = {
  hp: "",
  armor: "",
  weapon: "",
  gold: "",
};

// TABLEAU MULTI-DIMENSIONNEL AVEC LE TYPE D'ARME, SES POINTS D'ATTAQUE ET SON COÛT
let weapon = [
  [WOOD, 2, 10],
  [IRON, 5, 20],
  [MAGIC, 10, 50],
];

// TABLEAU MULTI-DIMENSIONNEL AVEC LE TYPE D'ARMURE, SES POINTS DE DÉFENSE ET SON COÛT
let armor = [
  [WOOD, 3, 10],
  [IRON, 6, 20],
  [MAGIC, 7, 50],
];

// TABLEAU MULTI-DIMENSIONNEL AVEC LE TYPE DE POTIONS, SES POINTS HEAL OU DÉGÂTS ET SON COÛT
// let potions = [
//   ["potion de soin", 10, 15],
//   ["potion de feu", 10, 20],
// ];

// ON INITIALISE LE MAITRE DU DONJON
function randomCalcul(x, y) {
  return x + Math.floor(Math.random() * y);
}
dungeonMaster.hp = randomCalcul(100, 100);
dungeonMaster.armor = randomCalcul(3, 5);
dungeonMaster.weapon = randomCalcul(4, 7);
dungeonMaster.gold = randomCalcul(15, 35);

// APPARITION DU TEXTE DE DEBUT

// ON LANCE L'AVENTURE

//ON DEMANDE AU JOUEUR DE CHOISIR SON EQUIPEMENT

// Fonction pour vérifier l'item existe dans le tableau
function foundItems(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == item) {
      return true;
    }
  }
  return false;
}

// Fonction pour rechercher une des caratéristiques (points ou coûts) de l'item dans le tableau
function itemFeature(array, item, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == item) {
      return array[i][x];
    }
  }
}

// Fonction pour rechercher le coût le plus petit dans le tableau
function findMinCost(array) {
  let temp = array[0][2];
  for (let i = 0; i < array.length; i++) {
    if (array[i][2] < temp) {
      temp = array[i][2];
    }
    return temp;
  }
}

// Choix de l'arme du joueur
// let chosenWeapon = null;
// while (!foundItems(weapon, chosenWeapon)) {
//   chosenWeapon = prompt(
//     `Choisissez votre arme : bois (coût ${weapon[0][2]} gold) , fer (coût ${weapon[1][2]}) gold ou magique (coût ${weapon[2][2]} gold)`
//   );
//   chosenWeapon = chosenWeapon.toLowerCase();
// }
// adventurer.weapon = weapon[chosenWeapon];
// let cost = adventurer.gold - itemFeature(weapon, chosenWeapon, 2);
// adventurer.gold = cost;

// // Choix de l'armure du joueur
// let chosenArmor = null;
// while (!foundItems(armor, chosenArmor)) {
//   chosenArmor = prompt(
//     `Choisissez votre armure : bois (coût ${armor[0][2]} gold) , fer (coût ${armor[1][2]}) gold ou magique (coût ${armor[2][2]} gold)`
//   );
//   chosenArmor = chosenArmor.toLowerCase();
// }
// adventurer.armor = armor[chosenArmor];
// cost -= itemFeature(armure, chosenArmor, 2);
// adventurer.gold = cost;

// // Choix de position si le joueur a assez de gold
// let chosenPotions;
// let healingPotionCount;
// let firePotionCount;

// while (cost > findMinCost(potions) && chosenPotions != "aucune") {
//   chosenPotions = prompt(
//     `Vous pouvez acheter des potions : potion de soin vous rajoute 10 points de vie (coût ${potions[0][2]} gold) ou potion de feu qui fait 10 points de dégâts(coût ${potions[1][2]}) gold ou aucune`
//   );
//   chosenPotions = chosenPotions.toLowerCase();
//   if (chosenPotions == potions[0][0]) {
//     healingPotionCount += 1;
//   } else if (chosenPotions == potions[1][0]) {
//     firePotionCount += 1;
//   }
// }
