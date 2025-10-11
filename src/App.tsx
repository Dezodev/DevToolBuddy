import {
    ActionIcon,
    AppShell,
    Burger,
    Button,
    Group,
    Text,
    Title,
    useComputedColorScheme,
    useMantineColorScheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MaterialIcon } from './components/MaterialIcon'
import './App.css'

function App() {
    const [opened, { toggle }] = useDisclosure()
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('light')

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
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

            <AppShell.Navbar p="md">
                <Text size="sm" c="dimmed">
                    Navigation
                </Text>
            </AppShell.Navbar>

            <AppShell.Main>
                <Title order={1}>Bienvenue sur DevToolBuddy</Title>
                <Text mt="md" size="lg">
                    Votre application est prête à être développée !
                </Text>
                <Button mt="xl" size="md">
                    Commencer
                </Button>
            </AppShell.Main>
        </AppShell>
    )
}

export default App
