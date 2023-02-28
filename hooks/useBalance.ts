import { getBalance } from "utils/ethHelper"
import { useEffect, useState } from "react"

export default function useBalance(tokenAddress:string, library: any, account: any){
    const [balance, setBalance] = useState('0')

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
