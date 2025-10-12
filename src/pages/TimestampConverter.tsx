import { Paper, SimpleGrid, Stack, Text, TextInput, Title } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { CopyButton } from '../components/CopyButton'

export function TimestampConverter() {
    const [timestampResult, setTimestampResult] = useState('')
    const [dateResult, setDateResult] = useState('')

    // Form pour Timestamp → Date
    const timestampForm = useForm({
        initialValues: {
            timestamp: '',
        },
    })

    // Form pour Date → Timestamp
    const dateForm = useForm({
        initialValues: {
            date: null as Date | null,
        },
    })

    const convertTimestampToDate = (input: string) => {
        const trimmed = input.trim()
        if (!trimmed) {
            setTimestampResult('')
            return
        }

        const num = parseFloat(trimmed)
        if (isNaN(num)) {
            setTimestampResult('Timestamp invalide')
            return
        }

        // Détection automatique: si > 10000000000, c'est en millisecondes
        const timestamp = num > 10000000000 ? num : num * 1000
        const date = dayjs(timestamp)

        if (!date.isValid()) {
            setTimestampResult('Timestamp invalide')
            return
        }

        setTimestampResult(date.format('DD/MM/YYYY HH:mm:ss'))
    }

    const convertDateToTimestamp = (date: Date | null) => {
        if (!date) {
            setDateResult('')
            return
        }

        const timestamp = Math.floor(dayjs(date).valueOf() / 1000)
        setDateResult(timestamp.toString())
    }

    // Écouter les changements du timestamp
    useEffect(() => {
        convertTimestampToDate(timestampForm.values.timestamp)
    }, [timestampForm.values.timestamp])

    // Écouter les changements de la date
    useEffect(() => {
        convertDateToTimestamp(dateForm.values.date)
    }, [dateForm.values.date])

    return (
        <Stack gap="xl">
            <div>
                <Title order={1}>Conversion de Timestamp</Title>
                <Text c="dimmed" mt="sm">
                    Convertissez entre timestamp Unix et date formatée
                </Text>
            </div>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                {/* Timestamp → Date */}
                <Paper shadow="sm" p="md" withBorder>
                    <Title order={3} mb="md">
                        Timestamp → Date
                    </Title>
                    <Stack gap="md">
                        <TextInput
                            label="Timestamp (secondes ou millisecondes)"
                            placeholder="1234567890"
                            {...timestampForm.getInputProps('timestamp')}
                        />
                        {timestampResult && (
                            <Paper p="md" withBorder bg="var(--mantine-color-default-hover)">
                                <Text size="sm" c="dimmed" mb={4}>
                                    Résultat :
                                </Text>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Text fw={600} size="lg">
                                        {timestampResult}
                                    </Text>
                                    <CopyButton value={timestampResult} />
                                </div>
                            </Paper>
                        )}
                    </Stack>
                </Paper>

                {/* Date → Timestamp */}
                <Paper shadow="sm" p="md" withBorder>
                    <Title order={3} mb="md">
                        Date → Timestamp
                    </Title>
                    <Stack gap="md">
                        <DateTimePicker
                            label="Sélectionnez une date et heure"
                            placeholder="Choisir une date"
                            valueFormat="DD/MM/YYYY HH:mm:ss"
                            {...dateForm.getInputProps('date')}
                        />
                        {dateResult && (
                            <Paper p="md" withBorder bg="var(--mantine-color-default-hover)">
                                <Text size="sm" c="dimmed" mb={4}>
                                    Timestamp (secondes) :
                                </Text>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Text fw={600} size="lg">
                                        {dateResult}
                                    </Text>
                                    <CopyButton value={dateResult} />
                                </div>
                            </Paper>
                        )}
                    </Stack>
                </Paper>
            </SimpleGrid>
        </Stack>
    )
}
