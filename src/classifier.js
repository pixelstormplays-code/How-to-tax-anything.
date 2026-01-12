import rules from "./ruleset.json" assert { type: "json" };

export function detectTraits(word) {
  const w = word.toLowerCase();

  if (w.includes("microwave")) return ["metal", "heat"];
  if (w.includes("car")) return ["metal", "motion"];
  if (w.includes("banana")) return ["food"];
  if (w.includes("phone")) return ["metal", "motion"];

  return ["motion"];
}

export function classify(word) {
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
