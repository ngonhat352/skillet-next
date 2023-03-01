import { Button, Typography } from "@mui/material"
import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { injectedConnector } from "../../../utils/ethHelper"
import useBalance from "hooks/useBalance";
import Image from 'next/image'
import WalletBalance from "components/wallet/WalletBalance";

export default function Wallet() {
  const { active, account, library, activate, deactivate } = useWeb3React()
  const wethBalance = useBalance('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', library, account) //TODO: enum later
  const ethBalance = useBalance('ETH', library, account)

  async function connect() {
    try {
      await activate(injectedConnector)
      localStorage.setItem('isWalletConnected', "true")
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', "false")
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injectedConnector)
          localStorage.setItem('isWalletConnected', "true")
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [account, activate])

  return (
    <>
      <div data-aos="fade-down" style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center" }}>
        <div style={{ height: "50vh", aspectRatio: "1 / 1", position: "relative" }}>
          <Image
            alt={"MetaMask"}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100%"
            src={'/metamaskLogo.gif'}
          />
        </div>


        {active ?
          <>
            <Typography>
              Welcome,
            </Typography>
            <Typography gutterBottom variant="h5">
              <b>{account}</b>
              {/* TODO: media smaller font size on smaller screens */}
            </Typography>
            <WalletBalance />
            <Button variant="outlined" color='inherit' sx={{ marginTop: '1vh', textTransform: 'none', backgroundColor: "darkred", "&:hover": { opacity: "0.8", backgroundColor: "darkred" } }}
              onClick={disconnect} >
              <b>Disconnect</b>
            </Button>
          </>
          :
          <>
            <Typography>Not connected</Typography>
            <Button variant="outlined" color='inherit' sx={{ textTransform: 'none', backgroundColor: "forestgreen", "&:hover": { opacity: "0.8", backgroundColor: "forestgreen" } }}
              onClick={connect}>
              <b>Connect to MetaMask</b>
            </Button>
          </>
        }
      </div>
    </>
  )
}
