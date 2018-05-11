define(["./my-app.js"],function(_myApp){"use strict";class SingleQuote extends _myApp.PolymerElement{constructor(){super()}static get template(){return _myApp.html`
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
    `}static get properties(){return{said:{type:String},by:{type:String}}}}window.customElements.define("single-quote",SingleQuote)});