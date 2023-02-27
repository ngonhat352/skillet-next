import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from 'ethers';
import ERC20ABI from '../../utils/erc20.abi.json'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

//@ts-ignore
const getERC20Contract = (tokenAddress, web3) => {
  return web3
    ? new web3.eth.Contract(ERC20ABI, tokenAddress, {
      from: web3.eth.defaultAccount,
    })
    : null
}

//@ts-ignore
export async function getBalance(tokenAddress, library, account) {
  try {
    if (tokenAddress === "ETH") {
      const balance = await library.eth
        .getBalance(account)
      return ethers.formatEther(balance)
    } else {
      const contract = getERC20Contract(tokenAddress, library)
      const balance = await contract?.methods
        .balanceOf(account)
        .call()
      return ethers.formatEther(balance)
    }
  } catch (error) {
    return '0'
  }
}       