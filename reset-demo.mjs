import { copyFileSync } from "node:fs";

copyFileSync(
  new URL("./vorlagen/bestellung.start.txt", import.meta.url),
  new URL("./bestellung.js", import.meta.url)
);
copyFileSync(
  new URL("./vorlagen/eslint.config.start.txt", import.meta.url),
  new URL("./eslint.config.mjs", import.meta.url)
);
console.log("Die Demo ist wieder im Startzustand.");
