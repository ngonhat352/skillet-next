import { Box, ButtonBase } from "@mui/material";
import Image from 'next/image'

//@ts-ignore
//TODO: add context 
export const AssetView = ({asset, index, setCurrentImage,setViewerIsOpen}) => {
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
                <Image
                    alt={asset.token_id}
                    width="100" //TODO: maybe squares like Instagram
                    height="100"
                    src={asset.image_url}
                    priority
                />
            </ButtonBase >
        </Box>
    )
}