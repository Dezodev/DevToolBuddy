import {
    Paper,
    Stack,
    Text,
    Title,
    NumberInput,
    Radio,
    Group,
    Button,
    Checkbox,
    Textarea,
    Grid,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import { CopyButton } from '../components/CopyButton'

type FormatType = 'plain' | 'html'
type UnitType = 'paragraphs' | 'sentences' | 'words'

export function LoremIpsumGenerator() {
    const [result, setResult] = useState('')

    const form = useForm({
        initialValues: {
            count: 3,
            unit: 'paragraphs' as UnitType,
            format: 'plain' as FormatType,
            // Options HTML
            includeHeadings: false,
            includeOrderedList: false,
            includeUnorderedList: false,
        },
    })

    const generateLoremIpsum = (values: typeof form.values) => {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                max: 8,
                min: 4,
            },
            wordsPerSentence: {
                max: 16,
                min: 4,
            },
        })

        let generatedText = ''

        if (values.format === 'plain') {
            // Génération simple
            if (values.unit === 'paragraphs') {
                generatedText = lorem.generateParagraphs(values.count)
            } else if (values.unit === 'sentences') {
                generatedText = lorem.generateSentences(values.count)
            } else {
                generatedText = lorem.generateWords(values.count)
            }
        } else {
            // Génération HTML
            const parts: string[] = []

            // Ajouter un titre principal si demandé
            if (values.includeHeadings) {
                parts.push('<h1>Lorem Ipsum</h1>')
            }

            // Générer les paragraphes
            const paragraphCount = values.unit === 'paragraphs' ? values.count : Math.max(2, Math.floor(values.count / 5))

            for (let i = 0; i < paragraphCount; i++) {
                // Ajouter des sous-titres occasionnellement
                if (values.includeHeadings && i > 0 && i % 3 === 0) {
                    parts.push(`<h2>${lorem.generateWords(3)}</h2>`)
                }

                parts.push(`<p>${lorem.generateSentences(5)}</p>`)

                // Ajouter une liste à puces après le premier paragraphe
                if (values.includeUnorderedList && i === 1) {
                    parts.push('<ul>')
                    for (let j = 0; j < 4; j++) {
                        parts.push(`  <li>${lorem.generateSentences(1)}</li>`)
                    }
                    parts.push('</ul>')
                }

                // Ajouter une liste numérotée après le troisième paragraphe
                if (values.includeOrderedList && i === 3) {
                    parts.push('<ol>')
                    for (let j = 0; j < 4; j++) {
                        parts.push(`  <li>${lorem.generateSentences(1)}</li>`)
                    }
                    parts.push('</ol>')
                }
            }

            generatedText = parts.join('\n')
        }

        setResult(generatedText)
    }

    const handleGenerate = () => {
        generateLoremIpsum(form.values)
    }

    return (
        <Stack gap="xl">
            <div>
                <Title order={1}>Générateur Lorem Ipsum</Title>
                <Text c="dimmed" mt="sm">
                    Générez du texte de remplissage pour vos maquettes et prototypes
                </Text>
            </div>

            <Grid gutter="lg">
                {/* Card Options - 1/3 */}
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <Paper shadow="sm" p="md" withBorder>
                        <Stack gap="md">
                            <NumberInput
                                label="Quantité"
                                description="Nombre d'unités à générer"
                                min={1}
                                max={100}
                                {...form.getInputProps('count')}
                            />

                            <Radio.Group
                                label="Unité"
                                description="Type d'unité à générer"
                                {...form.getInputProps('unit')}
                            >
                                <Group mt="xs">
                                    <Radio value="paragraphs" label="Paragraphes" />
                                    <Radio value="sentences" label="Phrases" />
                                    <Radio value="words" label="Mots" />
                                </Group>
                            </Radio.Group>

                            <Radio.Group
                                label="Format"
                                description="Format de sortie"
                                {...form.getInputProps('format')}
                            >
                                <Group mt="xs">
                                    <Radio value="plain" label="Texte brut" />
                                    <Radio value="html" label="HTML" />
                                </Group>
                            </Radio.Group>

                            {form.values.format === 'html' && (
                                <Stack gap="xs">
                                    <Text size="sm" fw={500}>
                                        Options HTML
                                    </Text>
                                    <Checkbox
                                        label="Inclure des titres (h1, h2)"
                                        {...form.getInputProps('includeHeadings', {
                                            type: 'checkbox',
                                        })}
                                    />
                                    <Checkbox
                                        label="Inclure une liste à puces"
                                        {...form.getInputProps('includeUnorderedList', {
                                            type: 'checkbox',
                                        })}
                                    />
                                    <Checkbox
                                        label="Inclure une liste numérotée"
                                        {...form.getInputProps('includeOrderedList', {
                                            type: 'checkbox',
                                        })}
                                    />
                                </Stack>
                            )}

                            <Button onClick={handleGenerate} fullWidth>
                                Générer
                            </Button>
                        </Stack>
                    </Paper>
                </Grid.Col>

                {/* Card Résultat - 2/3 */}
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Paper shadow="sm" p="md" withBorder style={{ height: '100%' }}>
                        <Stack gap="md" style={{ height: '100%' }}>
                            <Group justify="space-between">
                                <Text size="sm" fw={500}>
                                    Résultat
                                </Text>
                                {result && <CopyButton value={result} />}
                            </Group>

                            {result ? (
                                <Textarea
                                    value={result}
                                    readOnly
                                    minRows={20}
                                    autosize
                                    maxRows={30}
                                    styles={{
                                        input: {
                                            fontFamily: 'monospace',
                                            fontSize: '0.875rem',
                                        },
                                    }}
                                />
                            ) : (
                                <Text c="dimmed" ta="center" mt="xl">
                                    Cliquez sur "Générer" pour créer du texte Lorem Ipsum
                                </Text>
                            )}
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}
