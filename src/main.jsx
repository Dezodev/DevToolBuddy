import React from 'react'

import { MantineProvider } from '@mantine/core'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App'

import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider defaultColorScheme="dark">
                <App />
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
)
