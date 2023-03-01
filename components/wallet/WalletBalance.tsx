import Image from 'next/image'
import { useWeb3React } from "@web3-react/core"
import { Typography } from "@mui/material"
import useBalance from 'hooks/useBalance'

export default function WalletBalance() {
    const { account, library } = useWeb3React()
    const wethBalance = useBalance('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', library, account) //TODO: enum later
    const ethBalance = useBalance('ETH', library, account)

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: "40vw" }}> 
        {/* TODO: make width vw above different for different screen sizes (20vw for bigger screens) */}
            <div style={{ flex: "1 1 0", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly" }}>
                    <Image
                        alt="ETH logo"
                        src="/eth.png"
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
                        src="/weth.png"
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

        </div>
    )
}