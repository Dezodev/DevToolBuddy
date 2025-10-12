import { Paper, Stack, Text, Textarea, Title, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import _ from 'lodash'
import { CopyButton } from '../components/CopyButton'

type CaseType = 'uppercase' | 'lowercase' | 'capitalize' | 'title' | 'sentence' | 'camel' | 'snake' | 'kebab'

export function TextCaseConverter() {
    const [result, setResult] = useState('')
    const [activeCase, setActiveCase] = useState<CaseType | null>(null)

    const form = useForm({
        initialValues: {
            text: '',
        },
    })

    const convertCase = (text: string, caseType: CaseType) => {
        if (!text.trim()) {
            setResult('')
            setActiveCase(null)
            return
        }

        setActiveCase(caseType)
        let converted = ''

        switch (caseType) {
            case 'uppercase':
                converted = text.toUpperCase()
                break
            case 'lowercase':
                converted = text.toLowerCase()
                break
            case 'capitalize':
                converted = _.capitalize(text)
                break
            case 'title':
                converted = _.startCase(text)
                break
            case 'sentence':
                // Première lettre de chaque phrase en majuscule
                converted = text
                    .toLowerCase()
                    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
                break
            case 'camel':
                converted = _.camelCase(text)
                break
            case 'snake':
                converted = _.snakeCase(text)
                break
            case 'kebab':
                converted = _.kebabCase(text)
                break
        }

        setResult(converted)
    }

    const caseButtons: { type: CaseType; label: string }[] = [
        { type: 'uppercase', label: 'MAJUSCULES' },
        { type: 'lowercase', label: 'minuscules' },
        { type: 'capitalize', label: 'Capitalize' },
        { type: 'title', label: 'Title Case' },
        { type: 'sentence', label: 'Sentence case' },
        { type: 'camel', label: 'camelCase' },
        { type: 'snake', label: 'snake_case' },
        { type: 'kebab', label: 'kebab-case' },
    ]

    return (
        <Stack gap="xl">
            <div>
                <Title order={1}>Conversion de Casse</Title>
                <Text c="dimmed" mt="sm">
                    Convertissez votre texte en différents formats de casse
                </Text>
            </div>

            <Paper shadow="sm" p="md" withBorder>
                <Stack gap="md">
                    <Textarea
                        label="Texte à convertir"
                        placeholder="Entrez votre texte ici..."
                        minRows={4}
                        autosize
                        {...form.getInputProps('text')}
                    />

                    <div>
                        <Text size="sm" fw={500} mb="xs">
                            Choisissez un format :
                        </Text>
                        <Group gap="xs">
                            {caseButtons.map(({ type, label }) => (
                                <Button
                                    key={type}
                                    variant={activeCase === type ? 'filled' : 'default'}
                                    size="sm"
                                    onClick={() => convertCase(form.values.text, type)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Group>
                    </div>

                    {result && (
                        <Paper p="md" withBorder bg="var(--mantine-color-default-hover)">
                            <Text size="sm" c="dimmed" mb={4}>
                                Résultat :
                            </Text>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                <Text
                                    fw={600}
                                    style={{
                                        flex: 1,
                                        wordBreak: 'break-word',
                                        whiteSpace: 'pre-wrap',
                                    }}
                                >
                                    {result}
                                </Text>
                                <CopyButton value={result} />
                            </div>
                        </Paper>
                    )}
                </Stack>
            </Paper>
        </Stack>
    )
}
