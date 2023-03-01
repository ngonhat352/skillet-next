import { Box, ButtonBase } from "@mui/material";
import Image from 'next/image'
import styles from '@/styles/AssetView.module.css'
import { useContext } from "react";
import { AssetContext } from "context/AssetContext";
import { StaticImage } from "enums/StaticImage";

export const AssetView = ({ index }: { index: number }) => {
    const { assets, setCurrentImage, setViewerIsOpen } = useContext(AssetContext)!!
    const errored = !assets[index].image_url.includes("https")
    const src = errored ? StaticImage.ERROR : assets[index].image_url
    const hoverText = errored ? "Broken img link :(" : "Token ID: " + assets[index].token_id

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
                        blurDataURL={StaticImage.SPINNER}
                    />
                    <div className={styles.middle} >
                        <div className={styles.text}>{hoverText}</div>
                    </div>
                </div>
            </ButtonBase >
        </Box>
    )
}