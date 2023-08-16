import { html } from "lit";

export const GoldenOrder = html`
  <beer-label
    beer-name="Golden Order"
    beer-style="Golden Ale"
    abv="4.5%"
    contains="Talus & Fuggle hops"
    theme-color="255,215,0"
    style="--bubble-font-multiplier: 0.65;"
  >
    <p slot="description">
        Golden Order is a scholarly pursuit combining both intelligence and faith.
    </p>
    <p slot="description">
        So go on, Tarnished. Discover the powers of the Erdtree and restore the Lands Between.
    </p>
  </beer-label>
`;
