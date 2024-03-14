import { Suspense } from "react"
import PhotoDetailsLoading from "./loading"
import BackButton from "@/components/BackButton"

export default function PhotoDetailsLayout({
  children,
  related_photos,
}: {
  children: React.ReactNode
  related_photos: React.ReactNode
}) {
  return (
    <main>
      <BackButton />

      <Suspense fallback={<PhotoDetailsLoading />}>{children}</Suspense>

      {related_photos}
    </main>
  )
}
