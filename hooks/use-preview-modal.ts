import { create } from 'zustand'
import {Product} from "@/types";


interface usePreviewModalStore {
    isOpen: boolean
    data ?: Product
    onOpen: (data: Product) => void
    onClose: () => void
}

const usePreviewModal = create<usePreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => set({isOpen: true, data:data}),
    onClose: () => set({isOpen: false, data: undefined}),
}));

export default usePreviewModal;
