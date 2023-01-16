import { html } from "lit";

export const SiliconValley = html`
  <beer-label
    beer-name="Silicon Valley"
    beer-style="West Coast IPA"
    abv="6.3%"
    contains="Malts and Hops"
    theme-color="17,140,79"
  >
    <p slot="description">
      "Is that beer? No, you're not drinking that piss. We drink my piss! Tres
      Comas!"
    </p>
    <p slot="description">
      This hoppy west coast ipa will guarantee you a relaxing afternoon after a
      long day's work on your startup.
    </p>
  </beer-label>
`;
