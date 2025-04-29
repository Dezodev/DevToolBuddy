import React from 'react'

import PageHeader from '../../components/Page/Header'

const DateCalculate = () => {
    return (
        <div>
            <PageHeader
                title="Calcul de date"
                breadcrumb_items={[
                    { title: 'Date', href: '/date' },
                    { title: 'Calcul', href: null },
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

export default DateCalculate
