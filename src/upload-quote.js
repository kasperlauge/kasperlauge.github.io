import{PolymerElement,html}from"./my-app.js";class UploadQuote extends PolymerElement{constructor(){super();this.toasterOpacity=0}static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Tilføj et citat du har hørt 🙂</h1>
          <iron-form id="myForm" on-submit="handleSubmit">
            <form onsubmit="return false">
              <h5 class="form-text">Hvad blev der sagt? 🙂</h5>
              <input name="said" type="text" value={{said::input}} class="form-field">
              <h5 class="form-text">Hvem sagde det? 🙂</h5>
              <input name="by" type="text" value={{by::input}} class="form-field">
              <button class="submit-button" type="submit">Send 🙂</button>
            </form>
          </iron-form>
          <div class="toast" style$="opacity: {{toasterOpacity}};">Tak skal du have 🙂</div>
      </div>
    `}static get properties(){return{said:{type:String},by:{type:String},toasterOpacity:{type:Number}}}handleSubmit(){fetch("https://gruppe5-citater.firebaseio.com/quotes.json",{body:JSON.stringify({said:this.said,by:this.by}),method:"post",headers:{"content-type":"application/json"}}).then(res=>res.json()).then(()=>{this.said="";this.by="";this.toasterOpacity=1;setTimeout(()=>{this.toasterOpacity=0},3e3)})}}window.customElements.define("upload-quote",UploadQuote);