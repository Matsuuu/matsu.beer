import { html } from "lit";

export const PrettyHoppyPilsner = html`
  <beer-label
    beer-name="Pretty Hoppy Pilsner"
    beer-style="Pilsner"
    abv="5.3%"
    contains="Malts and Hops"
    theme-color="120,124,180"
  >
    <img slot="description" style="filter: invert(1); margin: 0 0 0rem 0" src="https://simplr.fi/assets/simplr_horisontal_black.svg" />
  <p slot="description">PHP - the langauge and this beer both might be polarizing. You either love it or you hate it. <br> One thing however you can't deny: They both get the job done.</p>
  </beer-label>
`;
