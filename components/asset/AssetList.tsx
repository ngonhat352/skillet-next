import { ImageList, ImageListItem } from "@mui/material"
import { CollectionContext } from "context/CollectionContext"
import { AssetContext } from "context/AssetContext";
import React, { useContext, useState } from "react";
import { Asset } from "model/asset";
import { AssetView } from "./AssetView"
import { ZoomModal } from "./ZoomModal"

export const AssetList = ({ assets }: { assets: Asset[] }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const { selected } = useContext(CollectionContext)!!
    const address = selected!!.address

    return (
        <AssetContext.Provider value={{
            assets, address, currentImage,
            setCurrentImage, viewerIsOpen, setViewerIsOpen
        }}>
            <ImageList variant="masonry" cols={3} gap={16} sx={{ overflowY: "hidden" }}>
                {assets.map((asset: Asset, index: number) =>
                    <ImageListItem key={asset.token_id}>
                        <AssetView index={index} />
                    </ImageListItem>
                )}
                <ZoomModal />
            </ImageList>
        </AssetContext.Provider>
    )
}
