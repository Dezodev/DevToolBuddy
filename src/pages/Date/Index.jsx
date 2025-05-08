import React from 'react'

import PageHeader from '../../components/Page/Header'
import SubPageList from '../../components/Page/SubPageList'

const DateIndex = () => {
    return (
        <div>
            <PageHeader title="Date" breadcrumb_items={[{ title: 'Date', href: null }]} />

            <SubPageList
                pages={[
                    { label: 'Timestamp', key: 'date-timestamp', link: '/date/timestamp' },
                    { label: 'Calcul', key: 'date-calculate', link: '/date/calculate' },
                ]}
            />
        </div>
    )
}

export default DateIndex
