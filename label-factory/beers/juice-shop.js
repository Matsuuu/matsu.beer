import { html } from "lit";

export const JuiceShop = html`
  <beer-label
    beer-name="Juice Shop"
    beer-style="Witbier"
    abv="5.0%"
    contains="Banana, coriander and orange peel"
    theme-color="255,225,53"
    style="--title-size: 3.6cqw"
  >
    <p slot="description">
        We heard you like banana in your witbier so we put banana onto your brew to boost the banana from the banana filled yeast esters.
    </p>
  </beer-label>
`;
