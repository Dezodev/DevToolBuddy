import { NavLink } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router'

const MenuNavLink = ({ item, ...props }) => {
    /* Hooks
     * ================================= */

    const navigate = useNavigate()

    /* State
     * ================================= */

    const [isOpen, setIsOpen] = React.useState(false)

    // Remove the 'key' property from the item object
    const { key, ...itemWithoutKey } = item

    /* Render
     * ================================= */

    return (
        <NavLink
            {...itemWithoutKey}
            active={item.active}
            opened={isOpen || item.childrens?.some((child) => child.active)}
            leftSection={item.icon ?? null}
            onClick={() => {
                if (item.childrens?.length > 0) {
                    setIsOpen(!isOpen)
                    return
                }
                navigate(item.link)
            }}
        >
            {item.childrens?.map((child) => (
                <MenuNavLink key={child.key} item={child} {...props} />
            ))}
        </NavLink>
    )
}

export default MenuNavLink
