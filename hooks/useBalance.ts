import { getBalance } from "utils/ethHelper"
import { useEffect, useState } from "react"

export default function useBalance(tokenAddress:string, library: any, account: string | null | undefined){
    const [balance, setBalance] = useState('...')

    useEffect(() => {
        async function run(){
            const balance = await getBalance(tokenAddress, library, account!!)
            setBalance(balance)
        }
        run()
    }, [tokenAddress, account, library])
    return balance;
}
