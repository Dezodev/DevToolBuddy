import { Button, Grid } from '@mantine/core'
import { mdiArrowRight } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import { useNavigate } from 'react-router'

const SubPageList = (props) => {
    /* Hooks
     * ================================= */

    const navigate = useNavigate()

    /* State
     * ================================= */

    const { pages } = props

    /* Methods
     * ================================= */

    const handleClick = (page) => {
        // Skip if no link
        if (page.link === null) {
            return
        }

        navigate(page.link)
    }

    return (
        <Grid>
            {pages.map((page) => (
                <Grid.Col span={4} key={page.key}>
                    <Button
                        justify="space-between"
                        variant="default"
                        fullWidth
                        rightSection={<Icon path={mdiArrowRight} size="14px" />}
                        onClick={() => handleClick(page)}
                    >
                        {page.label}
                    </Button>
                </Grid.Col>
            ))}
        </Grid>
    )
}

export default SubPageList
