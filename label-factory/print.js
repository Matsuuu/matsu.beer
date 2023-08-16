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
import { RaspberryPi } from "./beers/raspberry-pi.js";
import { JuiceShop } from "./beers/juice-shop.js";
import { Birramisu } from "./beers/birramisu.js";
import { BananaSplit } from "./beers/banana-split.js";
import { FourGate } from "./beers/four-gate.js";
import { GoldenOrder } from "./beers/golden-order.js";
import { Netscape } from "./beers/netscape.js";

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
    case "raspberry-pi":
        beer = RaspberryPi;
        break;
    case "juice-shop":
        beer = JuiceShop;
        break;
    case "birramisu":
        beer = Birramisu;
        break;
    case "banana-split":
        beer = BananaSplit;
        break;
    case "four-gate":
        beer = FourGate;
        break;
    case "golden-order":
        beer = GoldenOrder;
        break;
        case "netscape":
            beer = Netscape;
            break;
    
}

const beers = [
    beer, beer, beer
]

render(beers, main);
