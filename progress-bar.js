class TrainingProgressBar extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      
      this.shadowRoot.innerHTML = `
          <style>
              .progress-container {
                  width: 100%;
                  background-color: #f0f0f0;
                  border-radius: 10px;
                  padding: 4px;
                  box-sizing: border-box;
              }
              
              .progress-bar {
                  height: 20px;
                  background-color: #4CAF50;
                  border-radius: 8px;
                  width: 0%;
                  transition: width 0.3s ease-in-out;
              }
              
              .progress-label {
                  text-align: center;
                  margin-top: 5px;
                  font-family: Arial, sans-serif;
              }
          </style>
          
          <div class="progress-container">
              <div class="progress-bar"></div>
          </div>
          <div class="progress-label"></div>
      `;
      
      this.progressBar = this.shadowRoot.querySelector('.progress-bar');
      this.label = this.shadowRoot.querySelector('.progress-label');
  }
  
  connectedCallback() {
      this.updateProgress();
  }
  
  static get observedAttributes() {
      return ['progress', 'label'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'progress') {
          this.updateProgress();
      } else if (name === 'label') {
          this.updateLabel();
      }
  }
  
  updateProgress() {
      const progress = this.getAttribute('progress') || 0;
      this.progressBar.style.width = `${progress}%`;
      this.updateLabel();
  }
  
  updateLabel() {
      const progress = this.getAttribute('progress') || 0;
      const label = this.getAttribute('label') || '';
      this.label.textContent = `${label} ${progress}%`;
  }
}

customElements.define('training-progress-bar', TrainingProgressBar);