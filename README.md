# Grandeur

[![NPM](https://img.shields.io/npm/v/@grandeurcloud/grandeur-react.svg)](https://www.npmjs.com/package/grandeur-react) 
[![Downloads/week](https://img.shields.io/npm/dw/@grandeurcloud/grandeur-react.svg)](https://npmjs.org/package/grandeur-react)
[![License](https://img.shields.io/npm/l/grandeur-react.svg)](https://github.com/grandeurtech/react-sdk/blob/master/package.json)

Building a smart (IoT) product is an art. It is about unifying the physical world with the digital one. When you connect a hardware to the web, magic happens. But it involves development across an immense technology stack. You need to develop your hardware, your apps to monitor/control your hardware and a server backend to manage both. Then if you are (somehow) done with the development, there comes the hardest part; you will have to scale it all as your userbase gonna grow.

We can understand this because we have been there. 

Introducing Grandeur; A backend as a service (BaaS) platform for IoT. We have designed this platform so that you do not have to worry about the backend of your next big thing and you could focus on what matters the most; your hardware and apps. It is designed specifically to accelerate your IoT product development and push your product to market in weeks rather than in months or years.

# React SDK
Grandeur can resolve all the problems that you could face in building a smart (IoT) product. Like you can authenticate users, can store files in storage, can save data in database, host static website with builtin hosting and can subscribe to events from hardware and app to do realtime communication with the cloud platform. All it requires the integration of our platform in your technology stack.

React is to be honest the big thing, it makes app development so fast and easier. We have designed this React SDK to make it easier for you to integrate Grandeur in your React apps. So now all you have to do is to follow the [get started](#get-started) guidelines to quickly start building your solution. 

# Get Started
Let us get to the point straight. You are all motivated and ready to dive in. So quickly go to [Grandeur](https://cloud.grandeur.tech/), create a new project or select a project to get the API key.

![Select a project at Grandeur Dashboard](/images/select-project.jpeg)

Then just simply download the package from npm and use it in your react project

```bash
npm install grandeur-react --save
```
This package exports two things 1) a react component - use it as parent component to entire app code and init the SDK 2) HOC - wrap the component in which you want to access the `Grandeur` object to make request to Grandeur.

It is shown in the sample code below

```jsx
// index.js
// Import react and react dom
import React from 'react';
import ReactDOM from 'react-dom';

// Import app code
import App from './app';

// and Import Grandeur Component
import {Grandeur} from 'grandeur-react';

// Your access credential
// you can generate it through settings page
const accessCredential = {
  accessKey: "ACCESS-KEY",
  accessToken: "ACCESS-TOKEN"
}

// Render app
const page = (
    <Grandeur apiKey="YOUR-APIKEY" accessCredential={accessCredential}>
        {/* Your app code*/}
        <App />
    </Grandeur>
);

// Finally render
ReactDOM.render(page, document.getElementById('root'));
```

Then inside your `app.js`

```jsx
// app.js
// The App Component

// Libraries
import React, { Component } from 'react';

// Import Grandeur HOC
import {withGrandeur} from 'grandeur-react';

// Component
class App extends Component {

    // Constructor
    constructor(props) {
        super(props);

        // State of the Component
        this.state = {};
    }

    componentDidMount() {
        // Component is Mounted
        // get reference to the grandeur
        // through props. Which can be used to 
        // access all the features of Grandeur
        var project = this.props.grandeur;
    }
    
    // Render
    render() { 
        // Render the Component
        return <p>Hello World</p>;
    }
}

// Export the Component after wrapping in HOC
export default withGrandeur(App);
```
This component is based on the vanilla JavaScript SDK of Grandeur so you can checkout the docs and reference at https://github.com/grandeurtech/js-sdk