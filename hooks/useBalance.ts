import { useWeb3React } from "@web3-react/core"
import { getBalance } from "components/wallet/connector"
import { useEffect, useState } from "react"

export default function useBalance(tokenAddress:string){
    const [balance, setBalance] = useState('0')

    const { account, library } = useWeb3React()
    useEffect(() => {
        async function run(){
            const balance = await getBalance(tokenAddress, library, account)
            console.log(balance)
            //@ts-ignore
            setBalance(balance)
        }
        run()
    }, [tokenAddress, account, library])
    return balance;
}
