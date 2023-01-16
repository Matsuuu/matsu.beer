import { html } from "lit";

export const JavaIsLife = html`
  <beer-label
    beer-name="Java is Life"
    beer-style="Coffee Porter"
    abv="7.5%"
    contains="Malts, Hops and cold brewed coffee"
    theme-color="139,69,19"
  >
    <p slot="description">
      Java means two things: first of all it is a synonym for coffee, secondly
      it's a programming language.
    </p>
    <p slot="description">
      Both of these are crucial for human survival. The other keeps the
    </p>
  </beer-label>
`;
