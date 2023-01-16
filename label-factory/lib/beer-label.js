import { LitElement, html, css } from "lit";
import { annotate } from "rough-notation";
import "webcomponent-qr-code";

export class BeerLabel extends LitElement {
    static get properties() {
        return {
            beerName: { attribute: "beer-name" },
            beerStyle: { attribute: "beer-style" },
            abv: { attribute: "abv" },
            beerContains: { attribute: "contains" },
            themeColor: { attribute: "theme-color" },
        };
    }

    constructor() {
        super();
        this.beerName = "Placeholder";
        this.beerStyle = "Placeholder";
        this.abv = "0.0%";
        this.beerContains = "";
        this.themeColor = "";
    }

    themeColorAsRGB() {
        const colorSplit = this.themeColor.split(",");
        const [r, g, b] = colorSplit;
        return { r, g, b };
    }

    updated(_changedProperties) {
        if (_changedProperties.has("themeColor")) {
            const rgb = this.themeColorAsRGB();
            this.style.setProperty("--label-theme-color-r", rgb.r);
            this.style.setProperty("--label-theme-color-g", rgb.g);
            this.style.setProperty("--label-theme-color-b", rgb.b);
            this.setQrCodeColors();
        }
    }

    firstUpdated() {
        // setTimeout(() => {

        //     const beerStyle = /** @type {HTMLElement} */ (
        //         this.shadowRoot.querySelector(".style-bubble")
        //     );
        //     const annotation = annotate(beerStyle, { type: "circle" });
        //     annotation.show();
        // }, 500);
    }

    setQrCodeColors() {
        const styleTag = this.shadowRoot
            .querySelector("qr-code")
            .shadowRoot.querySelector("style");
        console.log("Style", styleTag);
        styleTag.innerHTML = `
    .fg{fill:#FFF;}
    .bg{fill:transparent;}
    svg {
      width: calc(var(--size-scale) * 200px);
      height: calc(var(--size-scale) * 200px);
    }
    `;
    }

    render() {
        return html`
      <div class="background"></div>

      <img
        class="front"
        src="https://matsu.beer/matsu-brewing-logo-full-color-rgb-outline.png"
      />

      <div class="beer-info">
        <h1>${this.beerName}</h1>

        <div class="style-bubble">
          <p>${this.beerStyle}</p>
        </div>
      </div>

      <div class="mandatory-stuff">
        <section id="specs">
          <p>${this.abv} ${this.beerStyle}</p>
          ${this.beerContains.length > 0
                ? html`<p>Contains ${this.beerContains}</p>`
                : ""
            }
        </section>
        <section id="information">
          <slot name="description">
        </section>
        <section id="socials">
            <qr-code format="svg" data="https://matsu.beer"></qr-code>
        </section>
      </div>
    `;
    }

    static get styles() {
        return css`
      :host {
        display: flex;
        border-radius: 4px;
        aspect-ratio: 2.02 / 1;
        display: flex;
        position: relative;
        overflow: hidden;
        background: #000;
        --label-theme-color: rgb(
          var(--label-theme-color-r),
          var(--label-theme-color-g),
          var(--label-theme-color-b)
        );
        border: calc(var(--size-scale) * 10px) solid var(--label-theme-color);
        color: var(--label-theme-color);

          --size-scale: 1;
      }

      .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(https://img.freepik.com/free-vector/halftone-background-abstract-black-white-dots-shape_314614-1558.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        filter: invert(1);
        opacity: 0.3;
      }

      img {
          width: calc(var(--size-scale) * 65%);
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

      .beer-info {
        position: absolute;
        left: calc(var(--size-scale) * 3rem);
        top: 0;
        bottom: 0;
        height: 100%;
        min-width: 25%;
        max-width: 25%;
        display: flex;
        flex-direction: column;
        font-size: calc(var(--size-scale) * 2rem);
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .beer-info h1 {
        font-size: calc(var(--size-scale) * 5rem);
      }

      .mandatory-stuff {
        font-weight: normal;
        position: absolute;
        right: calc(var(--size-scale) * 3rem);
        top: 5%;
        height: calc(90% - 2rem);
        max-width: 15%;
        color: #fff;
        background: rgba(
          var(--label-theme-color-r),
          var(--label-theme-color-g),
          var(--label-theme-color-b),
          0.7
        );
        display: flex;
        flex-direction: column;
        font-size: calc(var(--size-scale) * 1.4rem);
        border-radius: 8px;
        padding: calc(var(--size-scale) * 1rem);
      }

      .mandatory-stuff ::slotted(*) {
        font-size: inherit;
      }

      .mandatory-stuff section {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }

      #specs {
        flex-grow: 1;
      }

      #specs p {
        margin: calc(var(--size-scale) * 0.25rem) 0;
      }

      #information {
        flex-grow: 3;
      }

      #socials {
        flex-grow: 1;
      }

      .front {
        z-index: 10;
      }

      ul {
        list-style: none;
        padding: 0;
        line-height: 1.5;
      }

      i {
        vertical-align: text-top;
      }

      .style-bubble {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: calc(var(--size-scale) * 1rem);
        background: rgba(
          var(--label-theme-color-r),
          var(--label-theme-color-g),
          var(--label-theme-color-b),
          0.8
        );
        border: calc(var(--size-scale) * 6px) solid var(--label-theme-color);
        border-radius: 50%;
        height: calc(var(--size-scale) * 12rem);
        width: calc(var(--size-scale) * 12rem);
        color: #fff;
        text-align: center;
      }
    `;
    }
}

if (!customElements.get("beer-label")) {
    customElements.define("beer-label", BeerLabel);
}
