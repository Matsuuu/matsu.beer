import { html } from "lit";

export const PrettyHoppyPilsner = html`
  <beer-label
    beer-name="Pretty Hoppy Pilsner"
    beer-style="Pilsner"
    abv="5.3%"
    contains="Malts and Hops"
    theme-color="120,124,180"
  >
    <p slot="description">PHP - It's something people swear by, and it's something other evade like the plague. It, however is something that get's the job done.</p>
    <p slot="description">Whether or not you are the biggest enjoyer of hoppy lagers or hypertext preprocessors, this crushable pilsner will make sure to take your thirst away.</p>
  </beer-label>
`;
