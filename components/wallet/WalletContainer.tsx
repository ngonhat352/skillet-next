import { Button, Typography } from "@mui/material"
import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react"
import { injectedConnector } from "utils/ethHelper"
import Image from 'next/image'
import WalletBalance from "components/wallet/WalletBalance";
import { StaticImage } from "enums/StaticImage";
import styles from '@/styles/WalletContainer.module.css'

export default function WalletContainer() {
  const { active, account, library, activate, deactivate } = useWeb3React()

  async function connect() { //TODO: move to ethHelper
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
      <div data-aos="fade-down" className={styles.walletPage}>
        <div className={styles.metamaskLogo}>
          <Image
            alt={"MetaMask"}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100%"
            src={StaticImage.METAMASK}
          />
        </div>

        {active ?
          <>
            <Typography>
              Welcome,
            </Typography>
            <Typography gutterBottom variant="h5" sx={{ fontSize: '3vw' }}>
              <b>{account}</b>
            </Typography>
            <WalletBalance />
            <Button variant="outlined" color='inherit'
              className={styles.disconnectButton} onClick={disconnect} >
              <b>Disconnect</b>
            </Button>
          </>
          :
          <>
            <Typography>Not connected</Typography>
            <Button variant="outlined" color='inherit'
              className={styles.connectButton} onClick={connect}>
              <b>Connect to MetaMask</b>
            </Button>
          </>
        }
      </div>
    </>
  )
}
