import { Asset } from "model/asset";
import React from "react";
import { Dispatch, SetStateAction } from "react";

type AssetContextType = {
    assets: Asset[],
    address: string,
    currentImage: number,
    setCurrentImage: Dispatch<SetStateAction<number>>,
    viewerIsOpen: boolean,
    setViewerIsOpen: Dispatch<SetStateAction<boolean>>
}

export const AssetContext = React.createContext<AssetContextType | null>(null);
