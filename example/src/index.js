// Import react and react dom
import React from 'react'
import { createRoot } from 'react-dom/client'

// Import app
import App from './app'

// and Import Grandeur
import {Grandeur} from 'grandeur-react';

// Render app
const page = (
    <Grandeur apiKey="API-KEY" secretKey="SECRET-KEY">
        {/* App */}
        <App />
    </Grandeur>
);

createRoot(document.getElementById('root')).render(page);