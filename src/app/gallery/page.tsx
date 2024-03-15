import { LoadMorePhotos } from "@/components/LoadMorePhotos"
import OrderByMenu from "@/components/ui/dropdown-menu"
import { FetchPhotos } from "@/lib/Unsplash"
import { Photos } from "@/models/type"

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: { order_by: string }
}) {
  const photos: Photos = await FetchPhotos(1, searchParams.order_by ?? "latest")
  return photos ? (
    <>
      <div className="flex gap-2 items-center justify-end mb-1">
        <OrderByMenu />
      </div>
      <LoadMorePhotos basePhotos={photos} order_by={searchParams.order_by} />
    </>
  ) : (
    <div className="h-calcHeightWithSeach border flex items-center justify-center">
      <p>no images found</p>
    </div>
  )
}
