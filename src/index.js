// index.js — How to Tax Anything (Chaos Taxonomy Generator)

// --- RULESET --------------------------------------------------
const rules = {
  metal: {
    species: "Domestic Clang Beast",
    temperament: "Rigid but loyal",
    habitat: "Urban dens",
    tax: "5 chaos credits"
  },
  heat: {
    species: "Lesser Fire Elemental",
    temperament: "Irritable and humming",
    habitat: "Warm chambers",
    tax: "12 chaos credits"
  },
  motion: {
    species: "Kinetic Gremlin",
    temperament: "Chaotic and restless",
    habitat: "Anywhere it shouldn't be",
    tax: "8 chaos credits"
  },
  food: {
    species: "Kitchen Forager",
    temperament: "Timid but opportunistic",
    habitat: "Pantry biomes",
    tax: "3 chaos credits"
  }
};

// --- TRAIT DETECTOR -------------------------------------------
function detectTraits(word) {
  const w = word.toLowerCase();

  if (w.includes("microwave")) return ["metal", "heat"];
  if (w.includes("car")) return ["metal", "motion"];
  if (w.includes("banana")) return ["food"];
  if (w.includes("phone")) return ["metal", "motion"];
  if (w.includes("kettle")) return ["metal", "heat"];

  // Default fallback: everything has motion potential
  return ["motion"];
}

// --- CLASSIFIER ------------------------------------------------
function classify(word) {
  const traits = detectTraits(word);
  const data = traits.map(t => rules[t]);

  return {
    item: word,
    species: data.map(d => d.species).join(" / "),
    temperament: data.map(d => d.temperament).join(" + "),
    habitat: data.map(d => d.habitat).join(" & "),
    tax: data.map(d => d.tax).join(" + ")
  };
}

// --- DEMO ------------------------------------------------------
console.log(classify("Microwave"));
