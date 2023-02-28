import { ImageList, ImageListItem } from "@mui/material"
import { useState } from "react";
import { Asset } from "../../model/asset";
import { AssetView } from "./AssetView"
import { ZoomModal } from "./ZoomModal"

//@ts-ignore
export const AssetList = ({ assets }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <ImageList variant="masonry" cols={3} gap={16} sx={{ overflowY: "hidden" }}>
            {assets.map((asset: Asset, index: number) =>
                <ImageListItem key={asset.token_id}>
                    <AssetView asset={asset} index={index}
                        setCurrentImage={setCurrentImage} setViewerIsOpen={setViewerIsOpen} />
                </ImageListItem>
            )}
            <ZoomModal assets={assets} viewerIsOpen={viewerIsOpen}
                closeLightbox={closeLightbox} currentImage={currentImage} />
        </ImageList>
    )
}
