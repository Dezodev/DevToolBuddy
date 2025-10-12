import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Routes, Route } from 'react-router-dom'
import { AppHeader, AppNavbar } from './components/layout'
import { Home } from './pages/Home'
import { TimestampConverter } from './pages/TimestampConverter'
import { TextCaseConverter } from './pages/TextCaseConverter'
import './App.css'

function App() {
    const [opened, { toggle }] = useDisclosure()

    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/timestamp-converter',
            element: <TimestampConverter />,
        },
        {
            path: '/text-case-converter',
            element: <TextCaseConverter />,
        },
    ]

    const menuItems = [
        {
            label: 'Outils de Texte',
            icon: 'text_fields',
            items: [
                {
                    label: 'Conversion de Casse',
                    path: '/text-case-converter',
                    icon: 'format_size',
                },
            ],
        },
        {
            label: 'Outils de Date',
            icon: 'calendar_month',
            items: [
                {
                    label: 'Conversion Timestamp',
                    path: '/timestamp-converter',
                    icon: 'schedule',
                },
            ],
        },
    ]

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppHeader opened={opened} toggle={toggle} />
            <AppNavbar menuItems={menuItems} />

            <AppShell.Main>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}

export default App
