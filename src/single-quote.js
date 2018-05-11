import{PolymerElement,html}from"./my-app.js";class SingleQuote extends PolymerElement{constructor(){super()}static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <p>[[said]]</p>
        <p>Sagt af: [[by]]</p>
      </div>
    `}static get properties(){return{said:{type:String},by:{type:String}}}}window.customElements.define("single-quote",SingleQuote);