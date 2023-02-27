import { Autocomplete } from "@mui/material"
import { useEffect } from "react"
import { Collection } from "../../model/collection"
// import { useCollection } from "../../redux/useCollection"
import { BoxOption } from "./BoxOption"
import { SearchCollectionField } from "./SearchCollectionField"

//@ts-ignore
//TODO: add context 
const CollectionList = ({setSelected, collections}) => {
    // const {
    //     isFetching,
    //     fetchAllCollections,
    //     collections,
    // } = useCollection()

    // useEffect(() => {
    //     fetchAllCollections()
    // }, [fetchAllCollections])
    
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
            onChange={(event: any, newValue: Collection | null) => setSelected(newValue)}
            renderInput={(params) => <SearchCollectionField {...params} />}
        />
    )
}

export default CollectionList