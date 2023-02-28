import { AppBar, Stack, Toolbar, Button, Box, IconButton } from '@mui/material';
import Link from 'next/link';

export function NavBar() {
    return (
        <AppBar position='static' sx={{backgroundImage: "none", background: "none"}}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <Box
                        component="img"
                        sx={{ height: "3vh" }}
                        alt="Skillet logo"
                        src={'/skillet.png'}
                        onClick={() => {window.open('https://skillet.ai/', '_blank')!!.focus()}}
                    />
                </IconButton>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' sx={{ textTransform: 'none' }}>
                        <Link href='/wallet' shallow>Wallet</Link>
                    </Button>
                    <Button color='inherit' sx={{ textTransform: 'none' }}>
                        <Link href='/collections' shallow>Collections</Link>
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}