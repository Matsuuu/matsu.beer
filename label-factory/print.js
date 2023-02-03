import { render } from "lit";
import { AmberManagement } from "./beers/amber-management.js";
import { JavaIsLife } from "./beers/java-is-life.js";
import { PrettyHoppyPilsner } from "./beers/pretty-hoppy-pilsner.js";
import { SiliconValley } from "./beers/silicon-valley.js";
import { SimplrSaison } from "./beers/simplr-saison.js";
import "./lib/beer-label.js";

const main = document.querySelector("main");

let beer = PrettyHoppyPilsner;

const urlParams = new URLSearchParams(window.location.search)
const beerParam = urlParams.get("beer");

switch (beerParam) {
    case "php":
        beer = PrettyHoppyPilsner;
        break;
    case "silicon":
        beer = SiliconValley;
        break;
    case "java":
        beer = JavaIsLife;
        break;
    case "amber":
        beer = AmberManagement;
        break;
    case "simplr":
        beer = SimplrSaison;
        break;
}

const beers = [
    beer, beer, beer
]

render(beers, main);
