import React from 'react'

import PageHeader from '../../components/Page/Header'
import SubPageList from '../../components/Page/SubPageList'

const TextIndex = () => {
    return (
        <div>
            <PageHeader title="Texte" breadcrumb_items={[{ title: 'Texte', href: null }]} />

            <SubPageList
                pages={[
                    { label: 'Casse', key: 'text-case', link: '/text/case' },
                    { label: 'Base64', key: 'text-base64', link: '/text/base64' },
                ]}
            />
        </div>
    )
}

export default TextIndex
