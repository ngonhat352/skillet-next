import { Box, ButtonBase } from "@mui/material";
import Image from 'next/image'

//@ts-ignore
//TODO: add context 
export const AssetView = ({ asset, index, setCurrentImage, setViewerIsOpen }) => {
    const src = asset.image_url.includes("https") ? asset.image_url : '/error.webp'

    return (
        <Box
            component="li"
            onClick={() => {
                setCurrentImage(index);
                setViewerIsOpen(true)
            }}
            key={index}
        >
            <ButtonBase >
                <div style={{ width: "25vw", aspectRatio: "1 / 1", position: "relative" }}>
                    <Image
                        alt={asset.token_id}
                        fill
                        style={{ objectFit: "contain", borderRadius: "4px" }}
                        src={src}
                        priority
                        sizes="25vw"
                        placeholder="blur"
                        blurDataURL={'/placeholder.webp'}
                    />
                </div>

            </ButtonBase >
        </Box>
    )
}