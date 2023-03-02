import { Box, ButtonBase, CircularProgress } from "@mui/material";
import Image from 'next/image'
import styles from '@/styles/AssetView.module.css'
import { useContext, useEffect, useState } from "react";
import { AssetContext } from "context/AssetContext";
import { StaticImage } from "enums/StaticImage";

export const AssetView = ({ index }: { index: number }) => {
    const { assets, setCurrentImage, setViewerIsOpen } = useContext(AssetContext)!!

    const errored = !assets[index].image_url.includes("https")
    const src = errored ? StaticImage.ERROR : assets[index].image_url
    const hoverText = errored ? "Broken img link :(" : "Token ID: " + assets[index].token_id

    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
    }, [index, assets, src]);

    return (
        <Box
            onClick={() => {
                setCurrentImage(index);
                setViewerIsOpen(true)
            }}
            key={index}
        >
            <ButtonBase >
                <div className={styles.imageContainer}>
                    {
                        isLoading &&
                        <CircularProgress />
                    }

                    <Image
                        className={styles.image}
                        alt={assets[index].token_id}
                        fill
                        src={src}
                        priority
                        sizes="25vw"
                        onLoadingComplete={() => setLoading(false)}
                    />
                    <div className={styles.middle} >
                        <div className={styles.text}>{hoverText}</div>
                    </div>
                </div>
            </ButtonBase >
        </Box>
    )
}