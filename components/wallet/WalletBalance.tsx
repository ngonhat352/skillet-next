import Image from 'next/image'
import { useWeb3React } from "@web3-react/core"
import { Typography } from "@mui/material"
import useBalance from 'hooks/useBalance'
import { StaticImage } from 'enums/StaticImage'
import { Address } from 'enums/Address'

export default function WalletBalance() {
    const { account, library } = useWeb3React()
    const wethBalance = useBalance(Address.WETH, library, account)
    const ethBalance = useBalance(Address.ETH, library, account)

    return (
        <Typography component="div" sx={{ display: 'flex', flexDirection: 'row', width: {'xs': "40vw", 'md': '30vw','lg': '20vw' }, }}> 
            <div style={{ flex: "1 1 0", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly" }}>
                    <Image
                        alt="ETH logo"
                        src={StaticImage.ETH}
                        width="15"
                        height="20"
                        style={{marginRight: "1vw"}}
                    />
                    <Typography variant="h6">
                        <b>{ethBalance}</b>
                    </Typography>
                </div>
                <Typography sx={{textAlign: "center"}}>
                    ETH balance
                </Typography>

            </div>
            <div style={{ flex: "1 1 0", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly" }}>
                    <Image
                        alt="WETH logo"
                        src={StaticImage.WETH}
                        width="20"
                        height="20"
                        style={{marginRight: "1vw"}}
                    />
                    <Typography variant="h6">
                        <b>{wethBalance}</b>
                    </Typography>
                </div>
                <Typography sx={{textAlign: "center"}}>
                    WETH balance
                </Typography>

            </div>
        </Typography>
    )
}