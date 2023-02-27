import { AutocompleteRenderInputParams, TextField } from "@mui/material"

export const SearchCollectionField = (params: AutocompleteRenderInputParams) => {
    return (
        <TextField {...params}
            label="Search collection"
            sx={{ width: 350, margin: '10px auto' }} />
    )
}
