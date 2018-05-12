define(["require","./my-app.js"],function(_require,_myApp){"use strict";_require=babelHelpers.interopRequireWildcard(_require);class SeeQuotes extends(0,_myApp.GestureEventListeners)(_myApp.PolymerElement){constructor(){super();new Promise((res,rej)=>_require.default(["./single-quote.js"],res,rej)).then(bundle=>bundle&&bundle.$singleQuote||{});this.startPress=null;this.endPress=null;this.gesturing="none";this.toasterOpacity=0;this.fetchQuotes()}fetchQuotes(){fetch(`https://gruppe5-citater.firebaseio.com/quotes.json`).then(res=>res.json()).then(json=>{const arr=[];for(let quote in json){arr.push(json[quote])}this.data=arr;this.gesturing="none";this.toasterOpacity=0})}refresh(){this.gesturing="block";this.toasterOpacity=1;this.fetchQuotes()}static get template(){console.log("template");return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <div class="toast" style$="opacity: {{toasterOpacity}}; display: {{gesturing}};">
        <h5>Opdaterer 🙂🙂🙂...</h5>
      </div>
      <div class="card">
        <h1>Se alle citater sagt i gruppen her 🙂</h1>
        <button class="submit-button" on-click="refresh">Opdatér🙂</button>
        <template is="dom-repeat" items="{{data}}">
          <single-quote said=[[item.said]] by=[[item.by]]></single-quote>
        </template>
      </div>
    `}static get properties(){return{data:{type:String},toasterOpacity:{type:Number},gesturing:{type:Boolean}}}}window.customElements.define("see-quotes",SeeQuotes)});