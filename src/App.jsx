import '@mantine/core/styles.css'
import React, { Children } from 'react'

import { AppShell, Burger, Group, MantineProvider, NavLink, Skeleton } from '@mantine/core'
import Icon from '@mdi/react'
import { mdiViewDashboard, mdiCalendar, mdiFormatLetterCase } from '@mdi/js'

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
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <p style={{ marginBottom: 0 }}>DevToolBuddy</p>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                {menuItems.map((item) => (
                    <MenuNavLink key={item.key} item={item} currentKey={currentKey} />
                ))}
            </AppShell.Navbar>
            <AppShell.Main>Main</AppShell.Main>
        </AppShell>
    )
}

export default App
