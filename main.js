"use strict";

// {
//     id: 1,
//     num: "001",
//     name: "Bulbasaur",
//     img: "http://www.serebii.net/pokemongo/pokemon/001.png",
//     type: ["Grass", "Poison"],
//     height: "0.71 m",
//     weight: "6.9 kg",
//     candy: "Bulbasaur Candy",
//     candy_count: 25,
//     egg: "2 km",
//     spawn_chance: 0.69,
//     avg_spawns: 69,
//     spawn_time: "20:00",
//     multipliers: [1.58],
//     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//     next_evolution: [
//       {
//         num: "002",
//         name: "Ivysaur",
//       },
//       {
//         num: "003",
//         name: "Venusaur",
//       },
//     ],
//   },

console.log(pokemons);
const data = pokemons.splice(0, 148);
const newData = data.map((item, index, array) => {
  return {
    name: item.name,
    type: item.type,
    weight: item.weight,
    candy_count: item.candy_count,
    img: item.img,
  };
});

console.log(newData);

newData.forEach((e) => {
  const card = createElement(
    "div",
    "card shadow box",
    `
  <img src="${e.img}" alt="${e.title}" class="card-top-img" width="157" height="157">
  
  <div class="line"></div>
  <div class="card-body">
  <h3 class="item_name">${e.name}</h3>
    <h4 class="item_type">${e.type}</h4>
    <span class="item_weight">${e.weight}</span>
    <span  class="item_candy_count">${e.candy_count}  age
    </span>
  </div>
  
  `
  );
  $(".wrapper").appendChild(card);
});

const types = [];
function type() {
  newData.forEach((item) => {
    item.type.forEach((e) => {
      if (!types.includes(e)) {
        types.push(e);
      }
    });
  });
}

type();

console.log(types);

types.forEach((e) => {
  const option = createElement("option", "option-item", e);
  $("#type").appendChild(option);
});
