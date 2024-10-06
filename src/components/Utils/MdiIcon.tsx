import { mdiFormatText, mdiRobotOutline } from '@mdi/js'
import Icon from '@mdi/react'

const iconByName = {
    FormatText: mdiFormatText,
    RobotOutline: mdiRobotOutline,
}

export type MdiIconProps = {
    size?: number
    iconName?: keyof typeof iconByName
}

const MdiIcon = ({ size = 1, iconName }: MdiIconProps) => {
    let icon = null

    if (iconName && Object.keys(iconByName).includes(iconName)) {
        icon = iconByName[iconName]
    }

    if (!icon) return null

    return <Icon path={icon} size={size} />
}

export default MdiIcon
