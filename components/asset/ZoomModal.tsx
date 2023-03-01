import { useWeb3React } from "@web3-react/core"
import { getOwnerOfToken } from "utils/ethHelper"
import { useContext, useEffect, useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Asset } from "model/asset"
import { AssetContext } from "context/AssetContext"
import { StaticImage } from "enums/StaticImage"

export const ZoomModal = () => {
    const { assets, address, viewerIsOpen, setViewerIsOpen, currentImage } = useContext(AssetContext)!!

    const { library } = useWeb3React()
    const [currentIndex, setCurrentIndex] = useState(currentImage);
    const [caption, setCaption] = useState("");
    useEffect(() => {
        async function setNewCaption() {
            let newCaption = assets[currentIndex].image_url.includes("https") ? '' : 'Broken img link :( <br/>'
            const ownerAddress = await getOwnerOfToken(assets[currentIndex].token_id,
                address, library)
            newCaption = newCaption + `Owner: ${ownerAddress}<br/>Token ID: ${assets[currentIndex].token_id}`
            setCaption(newCaption)
        }
        setNewCaption()
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
                            source: x.image_url.includes("https") ? x.image_url : StaticImage.ERROR,
                            caption: caption
                        }))}
                    />

                </Modal>
            )}
        </ModalGateway>
    )
}