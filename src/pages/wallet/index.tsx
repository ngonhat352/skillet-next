import { Button, Typography } from "@mui/material"
import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { injectedConnector } from "../../../components/wallet/connector"
import useBalance from "hooks/useBalance";

export default function Wallet() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    const wethBalance = useBalance('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2') //TODO: enum later
    const ethBalance = useBalance('ETH')

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
        <Button onClick={connect}>Connect to MetaMask</Button>
        {active ? 
            <Typography>
                Connected with <b>{account}</b> - 
                ETH Balance: {ethBalance} - 
                WETH Balance: {wethBalance}
            </Typography> 
        : 
            <Typography>Not connected</Typography>
        }
        <Button onClick={disconnect}>Disconnect</Button>
      </>
    )
  }
  