import { Box, ButtonBase } from "@mui/material";
import Image from 'next/image'
import styles from '@/styles/AssetView.module.css'
import { AssetContext } from "./AssetList"
import { useContext } from "react";

export const AssetView = ({ index }: { index: number }) => {
    const { assets, setCurrentImage, setViewerIsOpen } = useContext(AssetContext)!!

    const src = assets[index].image_url.includes("https") ? assets[index].image_url : '/error.webp'
    //TODO: if src == error then cant be clicked, hover will show error message
    return (
        <Box
            onClick={() => {
                setCurrentImage(index);
                setViewerIsOpen(true)
            }}
            key={index}
        >
            <ButtonBase >
                <div className={styles.imageContainer} style={{ width: "25vw", aspectRatio: "1 / 1", position: "relative" }}>
                    <Image
                        className={styles.image}
                        alt={assets[index].token_id}
                        fill
                        style={{ objectFit: "contain", borderRadius: "4px" }}
                        src={src}
                        priority
                        sizes="25vw"
                        placeholder="blur"
                        blurDataURL={'/spinner.gif'}
                    />
                    <div className={styles.middle} >
                        <div className={styles.text}>{"Token ID: " + assets[index].token_id}</div>
                    </div>
                </div>
            </ButtonBase >
        </Box>
    )
}