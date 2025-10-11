import { CSSProperties } from 'react'

interface MaterialIconProps {
    icon: string
    size?: number | string
    style?: CSSProperties
    className?: string
}

export function MaterialIcon({ icon, size = 24, style, className = '' }: MaterialIconProps) {
    return (
        <span
            className={`material-symbols-outlined ${className}`}
            style={{
                fontSize: typeof size === 'number' ? `${size}px` : size,
                ...style,
            }}
        >
            {icon}
        </span>
    )
}
