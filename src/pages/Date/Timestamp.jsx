import React from 'react'
import PageHeader from '../../components/Page/Header'

const DateTimestamp = () => {
    return (
        <div>
            <PageHeader
                title="Timestamp"
                breadcrumb_items={[
                    { title: 'Date', href: '/date' },
                    { title: 'Timestamp', href: null },
                ]}
            />

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur ab,
                nulla quas assumenda iure? Amet fuga ut sunt, quos, numquam commodi aliquam et
                maiores voluptatum quas eveniet ratione in.
            </p>
        </div>
    )
}

export default DateTimestamp
