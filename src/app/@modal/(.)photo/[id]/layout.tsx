import { Modal, ModalWrapper } from "@/components/Modal"
import { Suspense } from "react"
import PhotoDetailsLoading from "./loading"

export default function PhotoDetailsLayout({
  children,
  related_photos,
}: {
  children: React.ReactNode
  related_photos: React.ReactNode
}) {
  return (
    <ModalWrapper>
      <Modal>
        <Suspense fallback={<PhotoDetailsLoading />}>
          {children}

          {related_photos}
        </Suspense>
      </Modal>
    </ModalWrapper>
  )
}
