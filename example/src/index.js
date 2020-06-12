// Import react and react dom
import React from 'react'
import ReactDOM from 'react-dom'

// Import app
import App from './app'

// and Import Apollo
import {Apollo} from 'apollo-react';

// Access Credential
var accessCredential = {
    accessKey: "ACCESS-KEY",
    accessToken: "ACCESS-TOKEN"
}

// Render app
const page = (
    <Apollo apiKey="API-KEY" accessCredential={accessCredential}>
        {/* App */}
        <App />
    </Apollo>
);

ReactDOM.render(page, document.getElementById('root'))
