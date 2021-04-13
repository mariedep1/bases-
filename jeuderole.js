"use strict";

const WOOD = "bois";
const IRON = "fer";
const MAGIC = "magique";

let adventurer = {
  hp: 100,
  armor: "",
  weapon: "",
  gold: 100,
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

// ON INITIALISE LE MAITRE DU DONJON
function randomCalcul(x, y) {
  return x + Math.floor(Math.random() * y);
}
dungeonMaster.hp = randomCalcul(125, 50);
dungeonMaster.armor = randomCalcul(3, 5);
dungeonMaster.weapon = randomCalcul(4, 7);
dungeonMaster.gold = randomCalcul(15, 35);

// ON LANCE L'AVENTURE
let game = document.querySelector("div#game");
let beginText = document.querySelector("div#game h2");
let beginButton = document.getElementById("adventure");

beginButton.addEventListener("click", function () {
  let x = document.querySelector(".visibility");
  if (x.style.display === "none") {
    x.style.display = "block";
    game.removeChild(beginButton);
    game.removeChild(beginText);
  } else {
    x.style.display = "none";
  }
});

//ON DEMANDE AU JOUEUR DE CHOISIR SON EQUIPEMENT

let form = document.querySelector("form#equipement");
let chosenArmor;
let chosenWeapon;
let radioWeapon = document.getElementsByName("weapon");
let radioArmor = document.getElementsByName("armor");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < 3; i++) {
    if (radioWeapon[i].checked) {
      chosenWeapon = radioWeapon[i].value;
      adventurer.weapon = findDamage(weapon, chosenWeapon);
    }
    if (radioArmor[i].checked) {
      chosenArmor = radioArmor[i].value;
      adventurer.armor = findDamage(armor, chosenArmor);
    }
  }
  game.removeChild(form);

  // Phase de combat
  let newEl = document.createElement("h2");
  newEl.textContent = "Le Combat commence";
  newEl.classList.add("mt-5");
  game.appendChild(newEl);
  attack();
});

//LES FONCTIONS
function findDamage(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === item) {
      return array[i][1];
    }
  }
}

function attack() {
  let whoPlay = 1;
  let fightLog = document.createElement("ol");
  game.appendChild(fightLog);
  let winnerText = document.createElement("h2");
  let damages;
  let attack;

  while (dungeonMaster.hp > 0 && adventurer.hp > 0) {
    if (whoPlay % 2 != 0) {
      attack = randomCalcul(1, dungeonMaster.weapon);
      damages = attack - adventurer.armor;

      if (damages <= 0) {
        let newLi = document.createElement("li");
        newLi.innerHTML = `Le maître du jeu t'a attaqué. Pfffiou, il ne t'a pas fait de dégâts. Il te reste ${adventurer.hp}`;
        newLi.classList.add("mb-5");
        game.appendChild(newLi);
      } else {
        adventurer.hp -= damages;
        let newLi = document.createElement("li");
        newLi.innerHTML = `Le maître du jeu t'a attaqué. Aïe, il ne t'a pas raté. Il t'inflige ${damages}. Il te reste ${adventurer.hp}`;
        newLi.classList.add("mb-5");
        game.appendChild(newLi);
      }
      whoPlay++;
      if (adventurer.hp <= 0) {
        winnerText.textContent = "Tu t'es fais dégommé aventurier, dommage !";
        winnerText.classList.add("fs-1");
        game.appendChild(winnerText);
      }
    } else {
      attack = randomCalcul(1, adventurer.weapon);
      damages = attack - dungeonMaster.armor;
      if (damages <= 0) {
        let newLi = document.createElement("li");
        newLi.innerHTML = `Tu as attaqué le maître du donjon. Pas de chance, tu as fait 0 dégâts. Il lui reste ${dungeonMaster.hp}`;
        newLi.classList.add("mb-5", "textPlayer");
        game.appendChild(newLi);
      } else {
        dungeonMaster.hp -= damages;
        let newLi = document.createElement("li");
        newLi.innerHTML = `Tu as attaqué le maître du donjon. Super, tu l'as touché. Tu lui infliges ${damages}. Il lui reste ${dungeonMaster.hp}`;
        newLi.classList.add("mb-5", "textPlayer");
        game.appendChild(newLi);
      }
      whoPlay++;
      if (dungeonMaster.hp <= 0) {
        winnerText.textContent =
          "Nom d'une chaise en pain d'épices ! Tu as réussi à le battre";
        winnerText.classList.add("fs-1");
        game.appendChild(winnerText);
      }
    }
  }
}
