import { html } from "lit";

export const RaspberryPi = html`
  <beer-label
    beer-name="Raspberry Pi"
    beer-style="Fruited Witbier"
    abv="5.0%"
    contains="Raspberries, coriander and orange peel"
    theme-color="227,11,92"
    style="--title-size: 3.6cqw"
  >
    <p slot="description">
        Does pineapple belong on pizza? Do raspberries belong in Witbier? Who cares, we did it anyway!
    </p>
  </beer-label>
`;
