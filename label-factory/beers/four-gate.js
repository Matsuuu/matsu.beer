import { html } from "lit";

export const FourGate = html`
  <beer-label
    beer-name="4-Gate"
    beer-style="West Coast IPA"
    abv="6.7%"
    contains="Centennial, Cascade, Mosaic, Tango"
    theme-color="54,104,1"
    style="--bubble-font-multiplier: 0.65;"
  >
    <p slot="description" style="font-size: 0.9cqw; margin-top: 0;">
        > GL HF
        <br>
        < 화이팅!
        <br><br>

        The 4 Warpgate Rush, often referred to colloquially as the "4 Gate", is an aggressive opening in the popular strategy game Starcraft.
    </p>
    <p slot="description" style="font-size: 0.9cqw; margin-top: 0;">
        Unlike the real 4-gate, this beer won't leave a sour taste in your mouth. 
    </p>
  </beer-label>
`;
