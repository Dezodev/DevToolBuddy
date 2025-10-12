import { ActionIcon, Tooltip } from '@mantine/core'
import { useState } from 'react'
import { MaterialIcon } from './MaterialIcon'

interface CopyButtonProps {
    value: string
    size?: number
    variant?: 'subtle' | 'filled' | 'light' | 'default' | 'outline'
}

export function CopyButton({ value, size = 16, variant = 'subtle' }: CopyButtonProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Erreur lors de la copie:', err)
        }
    }

    return (
        <Tooltip label={copied ? 'Copié !' : 'Copier'} withArrow>
            <ActionIcon
                variant={variant}
                size="sm"
                onClick={handleCopy}
                aria-label="Copier dans le presse-papier"
                color={copied ? 'green' : undefined}
            >
                <MaterialIcon icon={copied ? 'check' : 'content_copy'} size={size} />
            </ActionIcon>
        </Tooltip>
    )
}
