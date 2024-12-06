// Define the custom element class
class TrainingProgressBar extends HTMLElement {
  // Constructor: called when element is created
  constructor() {
      super(); // Always call super() first
      
      // Create a shadow root for encapsulation
      this.attachShadow({ mode: 'open' });
      
      // Create the progress bar structure
      this.shadowRoot.innerHTML = `
          <style>
              /* Container styles */
              .progress-container {
                  width: 100%;
                  background-color: #f0f0f0;
                  border-radius: 10px;
                  padding: 4px;
                  box-sizing: border-box;
              }
              
              /* Progress bar styles */
              .progress-bar {
                  height: 20px;
                  background-color: #4CAF50;
                  border-radius: 8px;
                  width: 0%;
                  transition: width 0.3s ease-in-out;
              }
              
              /* Label styles */
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
      
      // Store references to elements we'll need to update
      this.progressBar = this.shadowRoot.querySelector('.progress-bar');
      this.label = this.shadowRoot.querySelector('.progress-label');
  }
  
  // Called when element is added to the document
  connectedCallback() {
      // Set initial progress from attribute or default to 0
      this.updateProgress();
  }
  
  // Watch for attribute changes
  static get observedAttributes() {
      return ['progress', 'label'];
  }
  
  // Called when observed attributes change
  attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'progress') {
          this.updateProgress();
      } else if (name === 'label') {
          this.updateLabel();
      }
  }
  
  // Update progress bar width and label
  updateProgress() {
      const progress = this.getAttribute('progress') || 0;
      this.progressBar.style.width = `${progress}%`;
      this.updateLabel();
  }
  
  // Update the label text
  updateLabel() {
      const progress = this.getAttribute('progress') || 0;
      const label = this.getAttribute('label') || '';
      this.label.textContent = `${label} ${progress}%`;
  }
}

// Register the custom element
customElements.define('training-progress-bar', TrainingProgressBar);