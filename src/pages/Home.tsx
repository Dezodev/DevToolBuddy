import { Button, Text, Title } from '@mantine/core'

export function Home() {
    return (
        <>
            <Title order={1}>Bienvenue sur DevToolBuddy</Title>
            <Text mt="md" size="lg">
                Votre application est prête à être développée !
            </Text>
            <Button mt="xl" size="md">
                Commencer
            </Button>
        </>
    )
}
