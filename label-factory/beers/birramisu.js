import { html } from "lit";

export const Birramisu = html`
  <beer-label
    beer-name="Birramisu"
    beer-style="Pastry Stout"
    abv="8.5%"
    contains="Coffee, Cacao, Vanilla"
    theme-color="99,66,53"
    style="--title-size: 3.6cqw"
  >
    <p slot="description">
        Is it a beer? Is it a dessert? Is it a coffee?
    </p>
    <p slot="description">
        I don't care what it is but god be damned is it good.
    </p>
  </beer-label>
`;
