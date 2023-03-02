import React from "react"
import { Collection } from "model/collection"
import CollectionList from "components/collection/CollectionList"
import { AssetContainer } from "components/asset/AssetContainer"
import { CollectionView } from "components/collection/CollectionView"
import { Divider } from "@mui/material"
import { CollectionContext } from "context/CollectionContext"
import styles from '@/styles/CollectionContainer.module.css'

function CollectionContainer({ collections }: { collections: Collection[] }) {
    const [selected, setSelected] = React.useState<Collection | null>(null);
    return (
        <CollectionContext.Provider value={{ collections, selected, setSelected }}>
            <div className={styles.collectionPage}>
                <Divider className={styles.divider}>NFT Collections</Divider>
                <div data-aos="fade-up" className={styles.collectionContainer}>
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