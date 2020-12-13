// Import react and react dom
import React from 'react'
import ReactDOM from 'react-dom'

// Import app
import App from './app'

// and Import Grandeur
import {Grandeur} from 'grandeur-react';

// Access Credential
var accessCredential = {
    accessKey: "ACCESS-KEY",
    accessToken: "ACCESS-TOKEN"
}

// Render app
const page = (
    <Grandeur apiKey="API-KEY" accessCredential={accessCredential}>
        {/* App */}
        <App />
    </Grandeur>
);

ReactDOM.render(page, document.getElementById('root'))
