import { Tabs } from '@mantine/core'
import React from 'react'

import PageHeader from '../../components/Page/Header'
import TimestampConvert from '../../components/Page/Timestamp/Convert'

const DateTimestamp = () => {
    /* Hooks
     * ================================= */

    /* State
     * ================================= */

    const [activeTab, setActiveTab] = React.useState('convert')

    /* Methods
     * ================================= */

    /* Render
     * ================================= */

    return (
        <div>
            <PageHeader
                title="Timestamp"
                breadcrumb_items={[
                    { title: 'Date', href: '/date' },
                    { title: 'Timestamp', href: null },
                ]}
            />

            <Tabs value={activeTab} onChange={setActiveTab}>
                <Tabs.List mb={'md'}>
                    <Tabs.Tab value="convert">Conversion</Tabs.Tab>
                    <Tabs.Tab value="calculate">Calcul</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="convert">
                    <TimestampConvert />
                </Tabs.Panel>
                <Tabs.Panel value="calculate">
                    <p>
                        Calcul, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        tenetur ab, nulla quas assumenda iure? Amet fuga ut sunt, quos, numquam
                        commodi aliquam et maiores voluptatum quas eveniet ratione in.
                    </p>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default DateTimestamp
