import React from 'react'
import PageHeader from '../../components/Page/Header'

const TextBase64 = () => {
    return (
        <div>
            <PageHeader
                title="Base64"
                breadcrumb_items={[
                    { title: 'Texte', href: '/text' },
                    { title: 'Base64', href: null },
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

export default TextBase64
