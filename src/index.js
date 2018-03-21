import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.css'
import Root from './components/Root'

// Configure caching
import registerSW from './helpers/registerSW'

// setup fake backend
import { configureFakeBE } from './helpers/fakeBE'
configureFakeBE();

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);

registerSW()
