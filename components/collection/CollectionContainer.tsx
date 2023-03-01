import React, { Dispatch, SetStateAction } from "react"
import { Collection } from "model/collection"
import CollectionList from "components/collection/CollectionList"
import { AssetContainer } from "components/asset/AssetContainer"
import { CollectionView } from "components/collection/CollectionView"
import { Divider } from "@mui/material"
import { CollectionContext } from "context/CollectionContext"

function CollectionContainer({ collections }: { collections: Collection[] }) {
    const [selected, setSelected] = React.useState<Collection | null>(null);
    return (
        <CollectionContext.Provider value={{ collections, selected, setSelected }}>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: "90vh", backgroundColor: "black" }}>
                <Divider sx={{ width: '80vw', alignSelf: 'center' }}>NFT Collections</Divider>
                <div data-aos="fade-up" style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "5vh", marginBottom: '5vh'
                }}>
                    <CollectionList />

                    {selected ?
                        <div>
                            <CollectionView />
                            <AssetContainer />
                        </div>
                        : <></>
                    }
                </div>
            </div>
        </CollectionContext.Provider>
    )
}

export default CollectionContainer