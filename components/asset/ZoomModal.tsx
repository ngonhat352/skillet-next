import Carousel, { Modal, ModalGateway } from "react-images"
import { Asset } from "../../model/asset"

//@ts-ignore
//TODO: add context 
export const ZoomModal = ({ assets, viewerIsOpen, closeLightbox, currentImage }) => {
    return (
        //@ts-ignore
        <ModalGateway>
            {viewerIsOpen && (
                <Modal onClose={closeLightbox}
                    allowFullscreen={false}
                    styles={{
                        blanket: base => ({
                            ...base,
                            backgroundColor: 'black',
                        })
                    }}
                >
                    <Carousel
                        currentIndex={currentImage}
                        views={assets.map((x: Asset) => ({
                            ...x,
                            source: x.image_url,
                            caption: x.token_id
                        }))}
                    />

                </Modal>
            )}
        </ModalGateway>
    )
}