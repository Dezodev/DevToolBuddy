import {
    ActionIcon,
    AppShell,
    Burger,
    Group,
    Title,
    useComputedColorScheme,
    useMantineColorScheme,
} from '@mantine/core'
import { MaterialIcon } from '../MaterialIcon'

interface AppHeaderProps {
    opened: boolean
    toggle: () => void
}

export function AppHeader({ opened, toggle }: AppHeaderProps) {
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light')

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <AppShell.Header>
            <Group h="100%" px="md" justify="space-between">
                <Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Title order={3}>DevToolBuddy</Title>
                </Group>
                <ActionIcon
                    variant="default"
                    size="lg"
                    onClick={toggleColorScheme}
                    aria-label="Toggle color scheme"
                >
                    <MaterialIcon
                        icon={computedColorScheme === 'dark' ? 'light_mode' : 'dark_mode'}
                        size={20}
                    />
                </ActionIcon>
            </Group>
        </AppShell.Header>
    )
}
