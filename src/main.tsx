import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import 'material-symbols/outlined.css'
import 'dayjs/locale/fr'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider defaultColorScheme="auto">
                <DatesProvider settings={{ locale: 'fr' }}>
                    <App />
                </DatesProvider>
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
)
