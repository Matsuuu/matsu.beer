import { html } from "lit";

export const CCNA = html`
  <beer-label
    beer-name="CCNA DDH"
    beer-style="NEIPA"
    abv="6.4%"
    contains="Centennial, Cascade, Nelson Sauvin, Ariana"
    theme-color="255,212,85"
  >
    <p slot="description" style="text-align: left;">
    > configure terminal
        <br>
        <br>
    > hostname matsu-brewing
        <br>
        <br>
    > enable secret hunter2
        <br>
        <br>
    > no ip domain-lookup
        <br>
        <br>
    > exit
    </p>
  </beer-label>
`;
