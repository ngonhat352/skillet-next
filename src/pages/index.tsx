import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NavBar } from 'components/NavBar'
import Wallet from './wallet'
import CollectionContainer from './collections'
import { Collection } from "../../model/collection";
import { Divider } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home({collections}:{collections: Collection[]}) {
  return (
    <>
    <NavBar />
    <Wallet/>
      <CollectionContainer collections={collections}/>
    </>
  )
}

export async function getStaticProps() {
  const url = `https://skillet-interview-express-rng3tbs6qq-wl.a.run.app/getcollections`
  const res = await fetch(url, {
      method: "get",
  })
  const data = await res.json()
  return { props: { collections: data as Collection[] } }
}
