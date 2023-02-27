import { Fade, Modal } from "@mui/material"
import { CollectionView } from "./CollectionView"

//@ts-ignore
//TODO: add context 
export const CollectionModal = ({ openModal, setOpenModal, selected }) => {
    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fade in={openModal} style={{ transitionDelay: openModal ? '150ms' : '0ms' }}>
                <div>
                    <CollectionView {...selected!!} />
                </div>
            </Fade>
        </Modal>
    )
}