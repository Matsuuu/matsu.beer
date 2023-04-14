import { html } from "lit";

export const LagerSeriesCascade = html`
  <beer-label
    beer-name="Cascade"
    beer-style="Lager Series"
    abv="5.0%"
    contains="Cascade, NovaLager, Pilsner malt"
    theme-color="0,201,183"
  >
    <p slot="description">
        Fresh, refreshing and extremely crushable. 
    </p>
    <p slot="description">
        The Lager Series is a series of Single Malt and Single Hop (SMaSH) beers designed to trial run different hops and yeasts.
    </p>
  </beer-label>
`;
