import { html } from "lit";

export const BananaSplit = html`
  <beer-label
    beer-name="Banana Split"
    beer-style="Pastry Stout"
    abv="8.5%"
    contains="Banana, Vanilla, Maple Syrup"
    theme-color="171,154,47"
    style="--title-size: 3.6cqw"
  >
    <p slot="description">
        There's no such thing as flying too close to the sun.
    </p>
    <p slot="description">
        - Icarus probably
    </p>
  </beer-label>
`;
