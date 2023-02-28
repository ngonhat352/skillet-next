import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from 'ethers';
import ERC20ABI from './erc20.abi.json'
import ERC721ABI from './erc721.abi.json'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

const getContractFromABI = (tokenAddress: string, web3: any, abi: any[]) => {
  return web3
    ? new web3.eth.Contract(abi, tokenAddress, {
      from: web3.eth.defaultAccount,
    })
    : null
}

export async function getBalance(tokenAddress: string, library: any, account: string) {
  try {
    if (tokenAddress === "ETH") {
      const balance = await library.eth
        .getBalance(account)
      return ethers.formatEther(balance)
    } else {
      const contract = getContractFromABI(tokenAddress, library, ERC20ABI)
      const balance = await contract?.methods
        .balanceOf(account)
        .call()
      return ethers.formatEther(balance)
    }
  } catch (error) {
    return '0'
  }
}

export async function getOwnerOfToken(tokenid: string, address: string, provider: any) {
  try {
    const contract = getContractFromABI(address, provider, ERC721ABI)
    const ownerAddress = await contract.methods.ownerOf(tokenid).call();
    console.log(ownerAddress)
    return ownerAddress;
  }
  catch (error) {
    console.log(error)
    return '0'
  }
};