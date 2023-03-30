import { AppBar, Toolbar, Typography, Box } from '@mui/material'

type baseLayoutProps = {
    children: React.ReactNode
    appBarTitle: String
}


export function BaseLayout({ children, appBarTitle }: baseLayoutProps) {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h5' >
                        {appBarTitle}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box>
                {children}
            </Box>
        </>


    )



}