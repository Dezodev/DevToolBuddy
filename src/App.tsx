import { AppShell, Burger, Button, Group, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import './App.css'

function App() {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Title order={3}>DevToolBuddy</Title>
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
