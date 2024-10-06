import { MenuItem } from 'primereact/menuitem'
import MdiIcon from '../Utils/MdiIcon'
import { Menu } from 'primereact/menu'

const TopMenu: MenuItem[] = [
    {
        id: 'top-text',
        icon: <MdiIcon iconName="FormatText" size={1} />,
    },
]

const AppNavbar = () => {
    return (
        <div className="AppNavbar">
            <div className="AppNavbar-primary">
                <div className="AppNavbar-icon">
                    <MdiIcon iconName="RobotOutline" size={1} />
                </div>
                <Menu model={TopMenu} unstyled={true} />
            </div>
            <div className="AppNavbar-secondary">
                <p>...</p>
            </div>
        </div>
    )
}

export default AppNavbar
