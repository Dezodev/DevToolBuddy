import { createTheme, MantineProvider, rem } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App'

import './assets/css/main.css'

const theme = createTheme({
    fontSizes: {
        xs: rem(10),
        sm: rem(12),
        md: rem(14),
        lg: rem(18),
        xl: rem(20),
    },
    headings: {
        sizes: {
            h1: { fontSize: rem(28) },
            h2: { fontSize: rem(26) },
            h3: { fontSize: rem(24) },
            h4: { fontSize: rem(22) },
            h5: { fontSize: rem(20) },
            h6: { fontSize: rem(18) },
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider defaultColorScheme="dark" theme={theme}>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
)
