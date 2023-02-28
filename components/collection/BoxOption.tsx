import { Box } from "@mui/material";
import Image from "next/image";
import { Collection } from "../../model/collection";

type BoxOptionProps = {
    props: any
    option: Collection
}

export const BoxOption = ({ props, option }: BoxOptionProps) => {
    return (
        <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <Image
                loading="lazy"
                width="20"
                src={option.image_url}
                alt={option.name}
                height="20"
                quality={1}
            />
            {option.name} - {option.symbol}
        </Box>
    )
}
