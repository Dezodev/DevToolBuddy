import { Anchor, Breadcrumbs, Title } from '@mantine/core'

const PageHeader = ({ title, breadcrumb_items = [] }) => {
    return (
        <div className="page-header">
            <div className="page-header-breadcrumb">
                <Breadcrumbs>
                    <Anchor href="/">Tous les outils</Anchor>
                    {breadcrumb_items.length > 0 &&
                        breadcrumb_items.map((item, index) => {
                            if (item.href === null) {
                                return (
                                    <Anchor
                                        component="p"
                                        key={index}
                                        className="breadcrumb-no-link"
                                    >
                                        {item.title}
                                    </Anchor>
                                )
                            } else {
                                return (
                                    <Anchor href={item.href} key={index}>
                                        {item.title}
                                    </Anchor>
                                )
                            }
                        })}
                </Breadcrumbs>
            </div>

            <Title order={1}>{title}</Title>
        </div>
    )
}

export default PageHeader
