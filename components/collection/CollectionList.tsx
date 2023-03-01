import { Autocomplete } from "@mui/material"
import { useContext } from "react"
import { Collection } from "model/collection"
import { BoxOption } from "./BoxOption"
import { CollectionContext } from "context/CollectionContext"
import { SearchCollectionField } from "./SearchCollectionField"

const CollectionList = () => {  
    const { setSelected, collections } = useContext(CollectionContext)!!
  
    return (
        <Autocomplete
            disablePortal
            loading={collections.length > 0}
            id="collection-search-box"
            options={collections}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
                <BoxOption props={props} option={option} key={option.symbol} />
            )}
            onChange={(_, newValue: Collection | null) => setSelected(newValue)}
            renderInput={(params) => <SearchCollectionField {...params} />}
        />
    )
}

export default CollectionList