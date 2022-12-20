import { registerMacroConfig } from "./config/register.mjs";

// set up prototype functions.
Hooks.once("setup", () => {
});

// init msg.
Hooks.once("init", () => {
  console.log("Initializing Character Macros");
  registerMacroConfig();
});
