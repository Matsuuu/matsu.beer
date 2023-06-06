import { html } from "lit";

export const JuiceShop = html`
  <beer-label
    beer-name="Juice Shop"
    beer-style="Fruited Witbier"
    abv="5.0%"
    contains="Banana, coriander and orange peel"
    theme-color="255,191,0"
    style="--title-size: 3.6cqw"
  >
    <p slot="description">
      Sit down, relax and grab yourself one a bottle of Amber
      Management. The smooth caramelly flavor will sooth you down in an instant.
    </p>
  </beer-label>
`;
