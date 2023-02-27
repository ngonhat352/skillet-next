import { Box } from "@mui/material"
import { useEffect, useState } from "react"
// import { useAsset } from "../../redux/useAsset"
import { AssetList } from "./AssetList";

export const AssetContainer = (props: any) => {
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        fetch(`https://skillet-interview-express-rng3tbs6qq-wl.a.run.app/getCollectionAssets?collectionAddress=${props.address}`)
            .then(res => res.json())
            .then(data => {
                setAssets(data);
            }).catch((e) => { console.log(e) });
    }, [props.address]);

    return (
        <>
            {assets.length <= 0
                ? <><Box></Box></>
                : <Box sx={{ height: 450, overflowY: "scroll" }}>
                    <AssetList assets={assets} />
                </Box>
            }
        </>
    )
}
