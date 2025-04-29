import {
    ActionIcon,
    AppShell,
    Burger,
    Flex,
    Group,
    Menu,
    useMantineColorScheme,
} from '@mantine/core'
import { mdiCalendar, mdiFormatLetterCase, mdiViewDashboard } from '@mdi/js'
import { mdiBrightness6 } from '@mdi/js'
import { mdiWeatherNight } from '@mdi/js'
import { mdiWeatherSunny } from '@mdi/js'
import { mdiRestore } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router'

import MenuNavLink from './components/Menu/MenuNavLink'
import DateCalculate from './pages/Date/Calculate'
import DateIndex from './pages/Date/Index'
import DateTimestamp from './pages/Date/Timestamp'
import Home from './pages/Home'
import TextBase64 from './pages/Text/Base64'
import TextCase from './pages/Text/Case'

import '@mantine/core/styles.css'
import TextIndex from './pages/Text/Index'

const App = () => {
    /* Hooks
     * ================================= */

    const { setColorScheme, clearColorScheme } = useMantineColorScheme()
    const location = useLocation()

    /* State
     * ================================= */

    const [opened, setOpened] = React.useState(false)

    const menuItems = React.useMemo(() => {
        let items = [
            {
                label: 'Tous les outils',
                key: 'all-tools',
                link: '/',
                icon: <Icon path={mdiViewDashboard} size={1} />,
            },
            {
                label: 'Date',
                key: 'date',
                icon: <Icon path={mdiCalendar} size={1} />,
                childrens: [
                    { label: 'Timestamp', key: 'date-timestamp', link: '/date/timestamp' },
                    { label: 'Calcul', key: 'date-calculate', link: '/date/calculate' },
                ],
            },
            {
                label: 'Texte',
                key: 'text',
                icon: <Icon path={mdiFormatLetterCase} size={1} />,
                childrens: [
                    { label: 'Casse', key: 'text-case', link: '/text/case' },
                    { label: 'Base64', key: 'text-base64', link: '/text/base64' },
                ],
            },
        ]

        const markActive = (items = []) => {
            return items.map((item) => {
                item.active = item.link === location.pathname

                if (item.childrens?.length > 0) {
                    item.childrens = markActive(item.childrens)
                }

                return item
            })
        }

        return markActive(items)
    }, [location.pathname])

    /* Methods
     * ================================= */

    const toggle = () => setOpened((o) => !o)

    /* Render
     * ================================= */

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 220, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Flex justify="space-between" align="center" h="100%" w="100%" gap="xs">
                        <Group>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                            <p style={{ marginBottom: 0 }}>DevToolBuddy</p>
                        </Group>
                        <Group>
                            <Menu shadow="md" width={180}>
                                <Menu.Target>
                                    <ActionIcon variant="default" aria-label="Toggle dark mode">
                                        <Icon path={mdiBrightness6} size={0.8} />
                                    </ActionIcon>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item
                                        onClick={() => setColorScheme('light')}
                                        leftSection={<Icon path={mdiWeatherSunny} size={0.8} />}
                                    >
                                        Clair
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => setColorScheme('dark')}
                                        leftSection={<Icon path={mdiWeatherNight} size={0.8} />}
                                    >
                                        Sombre
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => setColorScheme('auto')}
                                        leftSection={<Icon path={mdiBrightness6} size={0.8} />}
                                    >
                                        Auto
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={clearColorScheme}
                                        leftSection={<Icon path={mdiRestore} size={0.8} />}
                                    >
                                        Réinitialiser
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Flex>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar py="md">
                {menuItems.map((item) => (
                    <MenuNavLink key={item.key} item={item} />
                ))}
            </AppShell.Navbar>
            <AppShell.Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/date" element={<DateIndex />} />
                    <Route path="/date/timestamp" element={<DateTimestamp />} />
                    <Route path="/date/calculate" element={<DateCalculate />} />
                    <Route path="/text" element={<TextIndex />} />
                    <Route path="/text/case" element={<TextCase />} />
                    <Route path="/text/base64" element={<TextBase64 />} />
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}

export default App
