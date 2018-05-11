import{PolymerElement,html}from"./my-app.js";class SeeQuotes extends PolymerElement{constructor(){super();import("./single-quote.js").then(bundle=>bundle&&bundle.$singleQuote||{});fetch("https://gruppe5-citater.firebaseio.com/quotes.json").then(res=>res.json()).then(json=>{const arr=[];for(let quote in json){arr.push(json[quote])}this.data=arr})}static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Se alle citater sagt i gruppen her 🙂</h1>
        <template is="dom-repeat" items="{{data}}">
          <single-quote said=[[item.said]] by=[[item.by]]></single-quote>
        </template>
      </div>
    `}static get properties(){return{data:{type:String}}}}window.customElements.define("see-quotes",SeeQuotes);