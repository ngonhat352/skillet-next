import { Inter } from 'next/font/google'
import { NavBar } from 'components/NavBar'
import CollectionContainer from 'components/collection/CollectionContainer'
import { Collection } from "model/collection";
import WalletContainer from 'components/wallet/WalletContainer'
import { API } from 'enums/API';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ collections }: { collections: Collection[] }) {
  return (
    <div style={{backgroundColor: 'black'}}>
      <NavBar />
      <WalletContainer />
      <CollectionContainer collections={collections} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(API.GENERAL + API.GET_COLLECTIONS, { method: "get" })
  const data = await res.json()
  return { props: { collections: data as Collection[] } }
}
