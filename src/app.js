import { classify } from "./classifier.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("item-input");
  const output = document.getElementById("output");

  document.getElementById("run").addEventListener("click", () => {
    const result = classify(input.value);
    output.textContent = JSON.stringify(result, null, 2);
  });
});
