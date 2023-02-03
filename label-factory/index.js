import { render } from "lit";
import { AmberManagement } from "./beers/amber-management.js";
import { JavaIsLife } from "./beers/java-is-life.js";
import { PrettyHoppyPilsner } from "./beers/pretty-hoppy-pilsner.js";
import { SiliconValley } from "./beers/silicon-valley.js";
import { SimplrSaison } from "./beers/simplr-saison.js";
import "./lib/beer-label.js";

const main = document.querySelector("main");

const beers = [
    JavaIsLife,
    AmberManagement,
    PrettyHoppyPilsner,
    SiliconValley,
    SimplrSaison
]

render(beers, main);
