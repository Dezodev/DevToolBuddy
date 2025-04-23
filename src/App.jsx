import '@mantine/core/styles.css'
import React, { Children } from 'react'

import {
    ActionIcon,
    AppShell,
    Burger,
    Button,
    Flex,
    Group,
    MantineProvider,
    Menu,
    NavLink,
    Skeleton,
    useMantineColorScheme,
} from '@mantine/core'
import Icon from '@mdi/react'
import { mdiViewDashboard, mdiCalendar, mdiFormatLetterCase } from '@mdi/js'
import { mdiBrightness6 } from '@mdi/js'
import { mdiWeatherNight } from '@mdi/js'
import { mdiWeatherSunny } from '@mdi/js'
import { mdiRestore } from '@mdi/js'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import DateIndex from './pages/Date/Index'
import DateTimestamp from './pages/Date/Timestamp'
import DateOperations from './pages/Date/Operations'
import TextIndex from './pages/Text/Index'
import TextCase from './pages/Text/Case'
import TextBase64 from './pages/Text/Base64'

const menuItems = [
    {
        label: 'Tous les outils',
        key: 'all-tools',
        href: '/',
        icon: <Icon path={mdiViewDashboard} size={1} />,
    },
    {
        label: 'Date',
        href: '/date',
        key: 'date',
        icon: <Icon path={mdiCalendar} size={1} />,
        childrens: [
            { label: 'Timestamp', key: 'date-timestamp', href: '/date/timestamp' },
            { label: 'Opérations', key: 'date-operations', href: '/date/operations' },
        ],
    },
    {
        label: 'Texte',
        href: '/text',
        key: 'text',
        icon: <Icon path={mdiFormatLetterCase} size={1} />,
        childrens: [
            { label: 'Casse', key: 'text-case', href: '/text/case' },
            { label: 'Base64', key: 'text-base64', href: '/text/base64' },
        ],
    },
]

const MenuNavLink = ({ item, currentKey, ...props }) => {
    return (
        <NavLink
            {...item}
            active={item.key === currentKey}
            component="a"
            leftSection={item.icon ?? null}
        >
            {item.childrens?.map((child) => (
                <MenuNavLink key={child.key} item={child} currentKey={currentKey} {...props} />
            ))}
        </NavLink>
    )
}

const App = () => {
    const { setColorScheme, clearColorScheme } = useMantineColorScheme()

    /* State
     * ================================= */
    const [opened, setOpened] = React.useState(false)
    const [currentKey, setCurrentKey] = React.useState('all-tools')

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
                    <MenuNavLink key={item.key} item={item} currentKey={currentKey} />
                ))}
            </AppShell.Navbar>
            <AppShell.Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/date" element={<DateIndex />} />
                    <Route path="/date/timestamp" element={<DateTimestamp />} />
                    <Route path="/date/operations" element={<DateOperations />} />
                    <Route path="/text" element={<TextIndex />} />
                    <Route path="/text/case" element={<TextCase />} />
                    <Route path="/text/base64" element={<TextBase64 />} />
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}

export default App
