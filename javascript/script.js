"use strict";

const chosenTime = document.querySelector("#reservation-time");
const searchButton = document.querySelector("#search-button");

function timeSelected(clickedButton) {
  let buttonId = clickedButton.id;
  console.log("Clicked button ID:", buttonId);
  for (let i = 1; i < 7; i++) {
    if (i !== parseInt(buttonId.slice(-1))) {
      document
        .getElementById(`suggest${i}`)
        .classList.remove("button-clicked-grid-container");
    }
  }
  document
    .getElementById(buttonId)
    .classList.add("button-clicked-grid-container");
}

function booked() {
  console.log("Botton clicked!");
  alert(`Successfully booked!`);
}

const sushiDescriptions = {
  KatsuKraziness: 'Crispy pork cutlet (Katsu) in the heart of the roll, complemented with cucumber, and showered in spicy mayo. A perfect blend of textures for the adventurous eater.',
  TempuraTemptation: 'An inviting combination of shrimp tempura and avocado, wrapped with nori and sushi rice, drizzled with sweet eel sauce. A crispy delight thats sure to please.',
  RainbowRadiance: 'The perfect showcase of assorted fresh fish such as tuna, salmon, and yellowtail over a roll filled with imitation crab, avocado, and cucumber. A colorful and flavorful delight that lives up to its name.',
  DragonsDesire: 'A sushi roll that perfectly balances the flavors of unagi (eel) and cucumber, topped with ripe avocado slices and a sprinkle of sesame seeds. A classic choice for any sushi lover.',
  OceansOasis: 'A refreshing roll filled with delicate scallops, tangy lemon zest, and a hint of spicy jalapeno, providing a burst of flavors that encapsulates the spirit of the ocean.',
  VegetarianVoyage: 'This roll is a delightful medley of pickled radish, cucumber, and avocado, offering a refreshing and crisp experience for those seeking a plant-based sushi option.',
  KyotoGardenRamen: 'A traditional tonkotsu (pork bone) broth base, infused with a hint of yuzu (Japanese citrus) for a tangy twist. Comes complete with succulent chashu pork slices, ajitama (marinated boiled egg), and a sprinkle of spring onions. A bowl that represents the fusion of tradition and innovation.',
  SapporoSnowfallRamen: 'A vegetarian delight with a shoyu (soy sauce) base, packed with an array of colorful, locally sourced vegetables. Topped with bamboo shoots, cloud ear mushrooms, and a generous portion of nori (seaweed), its a vegetable lovers dream come true.',
  TokyoTwilightRamen: 'Inspired by the chilly winters of Hokkaido, this bowl features a rich, creamy miso-based broth. Served with buttered corn, bean sprouts, and tender slices of chicken. Topped with a snowfall of grated cheese, its a warm embrace in a bowl.',
  NagasakiNauticalRamen: 'This seafood special features a clear, light shio (salt) broth base, brimming with a selection of the freshest seafood such as shrimp, scallops, and squid. A dash of chili oil gives it a mild kick. Its like tasting the sea in every spoonful.',
  SunsetBerry: 'This elegant dessert features a crisp meringue shell that cracks open to reveal a soft, marshmallowy interior. Topped with a vibrant blend of fresh raspberries, blueberries, and strawberries, and a drizzle of tangy lemon curd, its a perfect balance of sweet and sour.',
  MochaMountain: 'This Christmas log cake is a chocolate lovers dream come true. Featuring a soft chocolate sponge filled with a creamy mocha-infused ganache, its decorated with intricate icing sugar snowflakes and tiny marzipan holly leaves.',
  CaramelCascadeCheesecake: 'An indulgent creamy cheesecake with a buttery graham cracker crust, drenched in a waterfall of homemade salted caramel sauce. Each bite offers a heavenly mix of sweet, salty, creamy, and crunchy.',
  CitrusSymphony: 'This refreshing dessert is a melody of flavors, featuring three homemade sorbets: tangy lemon, sweet orange, and zesty grapefruit. Served with a garnish of fresh mint leaves and an optional splash of champagne for an elegant, sparkling finish, its the perfect light and refreshing end to any meal.',
};

let selectedImage = null;

function handleClick(sushiType, event) {
  const description = sushiDescriptions[sushiType];

  const descriptionDiv = document.getElementById('menuItemDescription1');
  descriptionDiv.querySelector('h1').textContent = sushiType;
  descriptionDiv.querySelector('p').textContent = description;

  if (selectedImage) {
    selectedImage.classList.remove('carousel-item-selected');
  }

  event.target.classList.add('carousel-item-selected');
  selectedImage = event.target;
}

function handleClick(sushiType) {
  const description = sushiDescriptions[sushiType];
  const descriptionDiv = document.getElementById('menuItemDescription1');
  descriptionDiv.querySelector('h1').textContent = sushiType;
  descriptionDiv.querySelector('p').textContent = description;
}

function handleClick1(sushiType, event) {
  const description = sushiDescriptions[sushiType];

  const descriptionDiv = document.getElementById('menuItemDescription3');
  descriptionDiv.querySelector('h1').textContent = sushiType;
  descriptionDiv.querySelector('p').textContent = description;

  if (selectedImage) {
    selectedImage.classList.remove('carousel-item-selected');
  }

  event.target.classList.add('carousel-item-selected');
  selectedImage = event.target;
}

function handleClick1(sushiType) {
  const description = sushiDescriptions[sushiType];
  
  const descriptionDiv = document.getElementById('menuItemDescription3');
  descriptionDiv.querySelector('h1').textContent = sushiType;
  descriptionDiv.querySelector('p').textContent = description;
}


function handleClick2(sushiType, event) {
  const description = sushiDescriptions[sushiType];

  const descriptionDiv = document.getElementById('menuItemDescription2');
  descriptionDiv.querySelector('h1').textContent = sushiType;
  descriptionDiv.querySelector('p').textContent = description;

  if (selectedImage) {
    selectedImage.classList.remove('carousel-item-selected');
  }

  event.target.classList.add('carousel-item-selected');
  selectedImage = event.target;
}

function handleClick2(sushiType) {
  const description = sushiDescriptions[sushiType];
  
  const descriptionDiv = document.getElementById('menuItemDescription2');
  descriptionDiv.querySelector('h1').textContent = sushiType;
  descriptionDiv.querySelector('p').textContent = description;
}


