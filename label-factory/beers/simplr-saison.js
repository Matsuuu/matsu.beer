import { html } from "lit";

export const SimplrSaison = html`
  <beer-label
    beer-name="Simplr Saison"
    beer-style="Saison"
    abv="5.1%"
    contains="Malts, Hops and Yeast"
    theme-color="255,109,0"
  >
    <img slot="description" style="filter: invert(1); margin: 0 0 0rem 0" src="https://simplr.fi/assets/simplr_horisontal_black.svg" />
  <p slot="description">Modern Problems, Simplr Solutions.<br> If this crispy sud and some extreme programming doesn't solve your problem, nothing will.</p>
  </beer-label>
`;
