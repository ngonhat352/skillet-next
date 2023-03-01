import React from "react"
import { Collection } from "../../../model/collection" //TODO: add to path in tsconfig
import CollectionList from "../../../components/collection/CollectionList"
import { AssetContainer } from "../../../components/asset/AssetContainer"
import { CollectionView } from "components/collection/CollectionView"
import { Divider } from "@mui/material"

function CollectionContainer({ collections }: { collections: Collection[] }) {
    const [selected, setSelected] = React.useState<Collection | null>(null);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: "90vh" }}>
            <Divider sx={{ width: '80vw', alignSelf: 'center' }}>NFT Collections</Divider>
            <div data-aos="fade-up" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "5vh", marginBottom: '5vh'
            }}>
                <CollectionList setSelected={setSelected} collections={collections} />

                {selected ?
                    <div>
                        <CollectionView {...selected!!} />
                        <AssetContainer address={selected!!.address} />
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default CollectionContainer