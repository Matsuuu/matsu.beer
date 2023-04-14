import { render } from "lit";
import { AmberManagement } from "./beers/amber-management.js";
import { CCNA } from "./beers/ccna.js";
import { JavaIsLife } from "./beers/java-is-life.js";
import { PrettyHoppyPilsner } from "./beers/pretty-hoppy-pilsner.js";
import { SiliconValley } from "./beers/silicon-valley.js";
import { SimplrSaison } from "./beers/simplr-saison.js";
import "./lib/beer-label.js";
import { LagerSeriesCascade } from "./beers/lager-series-cascade.js";
import { LagerSeriesAriana } from "./beers/lager-series-ariana.js";
import { MosaicExplorer } from "./beers/mosaic-explorer.js";

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
    case "ccna":
        beer = CCNA;
        break;
    case "lager-cascade":
        beer = LagerSeriesCascade;
        break;
    case "lager-ariana":
        beer = LagerSeriesAriana;
        break;
    case "mosaic-explorer":
        beer = MosaicExplorer;
        break;
}

const beers = [
    beer, beer, beer
]

render(beers, main);
