import { html } from "lit";

export const LagerSeriesAriana = html`
  <beer-label
    beer-name="Ariana"
    beer-style="Lager Series"
    abv="5.1%"
    contains="Ariana, Diamond Lager, Pilsner malt"
    theme-color="135,94,194"
  >
    <p slot="description">
        Full bodied, crisp, light.
    </p>
    <p slot="description">
        The Lager Series is a series of Single Malt and Single Hop (SMaSH) beers designed to trial run different hops and yeasts.
    </p>
  </beer-label>
`;
