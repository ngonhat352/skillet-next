import { AppBar, Stack, Toolbar, Button, Box, IconButton } from '@mui/material';
import { StaticImage } from 'enums/StaticImage';

export function NavBar() {
    return (
        <AppBar position='fixed' sx={{ backgroundImage: "none", background: "none", backgroundColor: "black" }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'
                    onClick={() => { window.open('https://skillet.ai/', '_blank')!!.focus() }}
                >
                    <Box
                        component="img"
                        sx={{ height: "3vh" }}
                        alt="Skillet logo"
                        src={StaticImage.SKILLET}
                    />
                </IconButton>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' sx={{ textTransform: 'none' }} onClick={() =>    window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Home
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}