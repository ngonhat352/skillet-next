import { Box } from "@mui/material"
import React from "react";
import { useEffect, useState } from "react"
import { AssetList } from "./AssetList";

export const AssetContainer = ({ address }: { address: string }) => {
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        fetch(`https://skillet-interview-express-rng3tbs6qq-wl.a.run.app/getCollectionAssets?collectionAddress=${address}`)
            .then(res => res.json())
            .then(data => {
                setAssets(data);
            }).catch((e) => { console.log(e) });
    }, [address]);

    return (
        <>
            {assets.length <= 0
                ? <><Box></Box></>
                : <Box sx={{ height: "600px" }}>
                    <AssetList assets={assets} address={address} />
                </Box>
            }
        </>
    )
}
