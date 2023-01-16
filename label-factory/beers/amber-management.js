import { html } from "lit";

export const AmberManagement = html`
  <beer-label
    beer-name="Amber Management"
    beer-style="Amber Ale"
    abv="4.2%"
    contains="Malts and Hops"
    theme-color="255,191,0"
  >
    <p slot="description">
      Temper is the one thing you can't get rid of, by losing it.
    </p>
    <p slot="description">
      For that reason, sit down, relax and grab yourself one a bottle of Amber
      Management. The smooth caramelly flavor will sooth you down in an instant.
    </p>
  </beer-label>
`;
