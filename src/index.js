// Main file to test the
// Grandeur Cloud React Component

// Import react libraries
import React from "react";
import ReactDOM from "react-dom";

// Import sample component
import App from './app';

// Import Grandeur Cloud SDK
import Apollo from './apollo/index';

// Apollo Config
const accessCredential = {
    accessKey: "YOUR-ACCESS-KEY",
    accessToken: "YOUR-ACCESS-TOKEN"
  }
  

// Wrap the app compoennt into Apollo Component
const page = (
    <Apollo apiKey="YOUR-APIKEY" accessCredential={accessCredential}>
        <App />
    </Apollo> 
)

// Render
ReactDOM.render(page, document.getElementById("root"));