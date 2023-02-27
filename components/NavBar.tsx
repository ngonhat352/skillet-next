import { AppBar, Stack, Toolbar, Button } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';

export function NavBar() {
    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <div style={{ width: '100%', height: '50px', maxWidth: '10vw', position: 'relative' }}>
                    <Image
                        alt='Skillet Logo'
                        fill
                        style={{ 'objectFit': 'contain' }}
                        src={'/skillet.png'}
                        priority
                    />
                </div>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' sx={{ textTransform: 'none' }}>
                        <Link href='/wallet'>Wallet</Link>
                    </Button>
                    <Button color='inherit' sx={{ textTransform: 'none' }}>
                        <Link href='/collections'>Collections</Link>
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}