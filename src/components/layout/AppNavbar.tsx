import { AppShell, NavLink } from '@mantine/core'
import { useNavigate, useLocation } from 'react-router-dom'
import { MaterialIcon } from '../MaterialIcon'

interface NavItem {
    label: string
    path: string
    icon: string
}

interface NavSection {
    label: string
    icon: string
    items: NavItem[]
}

interface AppNavbarProps {
    menuItems: NavSection[]
}

export function AppNavbar({ menuItems }: AppNavbarProps) {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <AppShell.Navbar p="md">
            {menuItems.map((section) => (
                <NavLink
                    key={section.label}
                    label={section.label}
                    leftSection={<MaterialIcon icon={section.icon} size={20} />}
                    childrenOffset={0}
                    defaultOpened
                    variant="subtle"
                    styles={{
                        root: {
                            pointerEvents: 'none',
                        },
                        label: {
                            color: 'var(--mantine-color-dimmed)',
                            fontWeight: 600,
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                        },
                        section: {
                            color: 'var(--mantine-color-dimmed)',
                        },
                        chevron: {
                            pointerEvents: 'auto',
                        },
                    }}
                >
                    {section.items.map((item) => (
                        <NavLink
                            key={item.path}
                            label={item.label}
                            leftSection={<MaterialIcon icon={item.icon} size={18} />}
                            active={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                            styles={{
                                root: {
                                    paddingLeft: '0.75rem',
                                },
                            }}
                        />
                    ))}
                </NavLink>
            ))}
        </AppShell.Navbar>
    )
}
