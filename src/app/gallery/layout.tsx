import { Suspense } from "react"
import GalleryLoading from "./loading"

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense fallback={<GalleryLoading />}>{children}</Suspense>
}
