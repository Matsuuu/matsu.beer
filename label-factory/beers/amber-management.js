import { html } from "lit";

export const AmberManagement = html`
  <beer-label
    beer-name="Amber Management"
    beer-style="Amber Ale"
    abv="4.2%"
    contains="East Kent Goldings & Fuggle"
    theme-color="255,191,0"
    style="--title-size: 3.6cqw"
  >
    <p slot="description">
      Sit down, relax and grab yourself one a bottle of Amber
      Management. The smooth caramelly flavor will sooth you down in an instant.
    </p>
  </beer-label>
`;
