import { html } from "lit";

export const MosaicExplorer = html`
  <beer-label
    beer-name="Mosaic Explorer"
    beer-style="Pilsner"
    abv="4.8%"
    contains="only Mosaic hops"
    theme-color="128,129,218"
  >
    <p slot="description">
         NCSA Mosaic was one of the first Web Browsers and was instrumental on popularizing the World Wide Web.
    </p>
    <p slot="description" style="margin: 0.2rem 0">
        Mosaic is the reason we have Internet Explorer. But unlike IE, this beer actually gets the job done.
    </p>
  </beer-label>
`;
