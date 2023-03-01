import { useWeb3React } from "@web3-react/core"
import { getOwnerOfToken } from "utils/ethHelper"
import { useContext, useEffect, useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Asset } from "../../model/asset"
import { AssetContext } from "./AssetList"

export const ZoomModal = () => {
    const { assets, address, viewerIsOpen, setViewerIsOpen, currentImage } = useContext(AssetContext)!!

    const { account, library } = useWeb3React()
    const [currentIndex, setCurrentIndex] = useState(currentImage);
    const [caption, setCaption] = useState("");
    useEffect(() => {
        async function run() {
            const ownerAddress = await getOwnerOfToken(assets[currentIndex].token_id,
                address, library)
            const newCaption = `Owner: ${ownerAddress}<br/>Token ID: ${assets[currentIndex].token_id}`
            setCaption(newCaption)
                //TODO: if src == error then caption will show error message
        }
        run()
    }, [address, assets, currentIndex, library])

    return (
        //@ts-ignore
        <ModalGateway>
            {viewerIsOpen && (
                <Modal onClose={() => setViewerIsOpen(false)}
                    allowFullscreen={false}
                    styles={{
                        blanket: base => ({
                            ...base,
                            backgroundColor: 'black',
                        })
                    }}
                >
                    <Carousel
                        styles={{
                            footerCount: base => ({
                                ...base,
                                display: "none"
                            }),
                            footerCaption: base => ({
                                ...base,
                                display: "table",
                                margin: "0 auto",
                            })
                        }}
                        currentIndex={currentImage}
                        trackProps={{
                            onViewChange: setCurrentIndex,
                        }}
                        views={assets.map((x: Asset) => ({
                            ...x,
                            source: x.image_url.includes("https") ? x.image_url : '/error.webp',
                            caption: caption
                        }))}
                    />

                </Modal>
            )}
        </ModalGateway>
    )
}