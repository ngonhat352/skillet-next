import { Button } from "@mui/material"
import React from "react"
import { Collection } from "../../../model/collection" //TODO: add to path in tsconfig
import CollectionList from "../../../components/collection/CollectionList"
import { CollectionModal } from "../../../components/collection/CollectionModal"
import {AssetContainer} from "../../../components/asset/AssetContainer"

//@ts-ignore
function CollectionContainer({ collections }) {
    const [selected, setSelected] = React.useState<Collection | null>(null);
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    return (
        <>
            <CollectionList setSelected={setSelected} collections={collections} />
            {selected ?
                <>
                    <Button onClick={() => setOpenModal(true)}>View collection info</Button>
                    <CollectionModal openModal={openModal} setOpenModal={setOpenModal} selected={selected} />
                    <AssetContainer address={selected!!.address} />
                </>
                : <></>
            }
        </>
    )
}

export async function getServerSideProps() {
    const url = `https://skillet-interview-express-rng3tbs6qq-wl.a.run.app/getcollections`
    const res = await fetch(url, {
        method: "get",
    })
    const data = await res.json()
    return { props: { collections: data } }
}

export default CollectionContainer