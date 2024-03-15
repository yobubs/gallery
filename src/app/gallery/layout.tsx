import { Suspense } from "react"
import GalleryLoading from "./loading"
import { SearchPhotosDialog } from "@/components/ui/dialog"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <SearchPhotosDialog />
      <Suspense fallback={<GalleryLoading />}>{children}</Suspense>
    </main>
  )
}
