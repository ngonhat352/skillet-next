import { Box } from "@mui/material"
import { CollectionContext } from "context/CollectionContext"
import { API } from "enums/API";
import React, { useContext } from "react";
import { useEffect, useState } from "react"
import { AssetList } from "./AssetList";

export const AssetContainer = () => {
    const { selected } = useContext(CollectionContext)!!

    const [assets, setAssets] = useState([]);
    useEffect(() => {
        fetch(API.GENERAL + API.GET_ASSETS + `${selected!!.address}`)
            .then(res => res.json())
            .then(data => {
                setAssets(data);
            }).catch((e) => { console.log(e) });
    }, [selected]);

    return (
        <>
            {assets.length <= 0
                ? <><Box></Box></>
                : <Box sx={{ height: "60vh" }}>
                    <AssetList assets={assets} />
                </Box>
            }
        </>
    )
}
