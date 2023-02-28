import React from "react"
import { Collection } from "../../../model/collection" //TODO: add to path in tsconfig
import CollectionList from "../../../components/collection/CollectionList"
import { AssetContainer } from "../../../components/asset/AssetContainer"
import { CollectionView } from "components/collection/CollectionView"
import { NavBar } from "components/NavBar"

//@ts-ignore
function CollectionContainer({ collections }) {
    const [selected, setSelected] = React.useState<Collection | null>(null);

    return (
        <>
            <NavBar />
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <CollectionList setSelected={setSelected} collections={collections} />
                {selected ?
                    <>
                        <CollectionView {...selected!!} />
                        <AssetContainer address={selected!!.address} />
                    </>
                    : <></>
                }
            </div>
        </>
    )
}

export async function getStaticProps() {
    const url = `https://skillet-interview-express-rng3tbs6qq-wl.a.run.app/getcollections`
    const res = await fetch(url, {
        method: "get",
    })
    const data = await res.json()
    return { props: { collections: data } }
}

export default CollectionContainer