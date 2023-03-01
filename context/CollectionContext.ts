import { Collection } from "model/collection";
import React from "react";
import { Dispatch, SetStateAction } from "react";

type CollectionContextType = {
    collections: Collection[],
    selected: Collection | null,
    setSelected: Dispatch<SetStateAction<Collection | null>>,
}

export const CollectionContext = React.createContext<CollectionContextType | null>(null);