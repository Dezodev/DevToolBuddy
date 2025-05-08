import React from 'react'

import PageHeader from '../components/Page/Header'
import SubPageList from '../components/Page/SubPageList'

const Home = () => {
    return (
        <div>
            <PageHeader
                title="Tous les outils"
                breadcrumb_items={[{ title: 'Tous les outils', href: null }]}
            />

            <h2>Date</h2>

            <SubPageList
                pages={[
                    { label: 'Timestamp', key: 'date-timestamp', link: '/date/timestamp' },
                    { label: 'Calcul', key: 'date-calculate', link: '/date/calculate' },
                ]}
            />

            <h2>Texte</h2>

            <SubPageList
                pages={[
                    { label: 'Casse', key: 'text-case', link: '/text/case' },
                    { label: 'Base64', key: 'text-base64', link: '/text/base64' },
                ]}
            />
        </div>
    )
}

export default Home
