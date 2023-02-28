import { ImageList, ImageListItem } from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from "react";
import { Asset } from "../../model/asset";
import { AssetView } from "./AssetView"
import { ZoomModal } from "./ZoomModal"

type AssetContext = {
    assets: Asset[],
    address: string,
    currentImage: number,
    setCurrentImage: Dispatch<SetStateAction<number>>,
    viewerIsOpen: boolean,
    setViewerIsOpen: Dispatch<SetStateAction<boolean>>
}
export const AssetContext = React.createContext<AssetContext | null>(null);

type AssetListProps = {
    assets: Asset[],
    address: string
}

export const AssetList = ({ assets, address }: AssetListProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

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
