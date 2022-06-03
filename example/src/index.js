// Import react and react dom
import React from 'react'
import { createRoot } from 'react-dom/client'

// Import app
import App from './app'

// and Import Grandeur
import {Grandeur} from 'grandeur-react';

// Access Credential
var credentials = {
    key: "ACCESS-KEY",
    token: "ACCESS-TOKEN"
}

// Render app
const page = (
    <Grandeur apiKey="API-KEY" credentials={credentials}>
        {/* App */}
        <App />
    </Grandeur>
);

createRoot(document.getElementById('root')).render(page);