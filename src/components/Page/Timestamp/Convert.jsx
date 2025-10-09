import { Button, Grid, Tabs, TextInput } from '@mantine/core'
import { DateTimePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
import ow from 'ow'
import React from 'react'

const validateValue = (value, rules) => {
    try {
        ow(value, rules)
    } catch (error) {
        return error.message
    }

    return null
}

const TimestampConvert = () => {
    /* Hooks
     * ================================= */

    const convertForm = useForm({
        mode: 'uncontrolled',
        initialValues: {
            timestamp: null,
            date: null,
        },

        validate: {
            timestamp: (value) =>
                validateValue(value, ow.optional.number.integer.greaterThanOrEqual(0)),
            date: (value) => validateValue(value, ow.optional.date),
        },
    })

    /* State
     * ================================= */

    /* Methods
     * ================================= */

    const handleNow = () => {
        const now = dayjs()

        convertForm.setFieldValue('timestamp', now.unix())
        convertForm.setFieldValue('date', now.toDate())
    }

    const handleConvert = (from) => {
        // Validate form
        console.log('-- is valid?', convertForm.validate()) // convertForm.validate()

        return
        const values = convertForm.getValues()

        if (from === 'timestamp') {
            convertForm.setFieldValue('date', dayjs(values.timestamp * 1000).toDate())
        } else {
            convertForm.setFieldValue('timestamp', dayjs(values.date).unix())
        }
    }

    /* Render
     * ================================= */

    return (
        <>
            <form onSubmit={(ev) => ev.preventDefault()}>
                <Grid>
                    <Grid.Col span={6}>
                        <TextInput
                            label="Timestamp"
                            placeholder="1700000000"
                            key={convertForm.key('timestamp')}
                            {...convertForm.getInputProps('timestamp')}
                        />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <DateTimePicker
                            withSeconds
                            dropdownType="modal"
                            label="Date"
                            placeholder="01/01/1970 00:00:00"
                            key={convertForm.key('date')}
                            {...convertForm.getInputProps('date')}
                        />
                    </Grid.Col>
                </Grid>

                <Grid mt={'md'}>
                    <Grid.Col span={4}>
                        <Button variant="default" type="button" fullWidth onClick={handleNow}>
                            Maintenant
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Button type="button" fullWidth onClick={() => handleConvert('timestamp')}>
                            Convertir depuis le timestamp
                        </Button>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Button type="button" fullWidth onClick={() => handleConvert('date')}>
                            Convertir depuis la date
                        </Button>
                    </Grid.Col>
                </Grid>
            </form>

            {/* <pre>
                <code>{JSON.stringify(convertForm.getValues(), null, 2)}</code>
            </pre> */}
        </>
    )
}

export default TimestampConvert
