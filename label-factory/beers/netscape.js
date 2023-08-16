import { html } from "lit";

export const Netscape = html`
  <beer-label
    beer-name="Netscape"
    beer-style="West Coast IPA"
    abv="7.0%"
    contains="Ariana, Cascade, Mosaic, Talus, Kveik"
    theme-color="0,124,133"
    style="--bubble-font-multiplier: 0.65;"
  >
    <p slot="description" style="font-size: 0.9cqw; margin-top: 0">
        Netscape Navigator was one of the original web browsers in the Internet revolution of the mid-1990's
    </p>
    <p slot="description" style="font-size: 0.9cqw; margin-top: 0">
        While the software was inpired by the Mosaic browser, no mosaic is present in this ale.
    </p>
  </beer-label>
`;
