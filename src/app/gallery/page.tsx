import { LoadMorePhotos } from "@/components/LoadMorePhotos"
import { SearchPhotosDialog } from "@/components/ui/dialog"
import { FetchPhotos } from "@/lib/Unsplash"
import { Photos } from "@/models/type"

export default async function GalleryPage() {
  const photos: Photos = await FetchPhotos(1)
  return (
    <main>
      {photos ? (
        <>
          <SearchPhotosDialog />
          <LoadMorePhotos basePhotos={photos} />
        </>
      ) : (
        <div className="h-[calc(100dvh-3.5rem)] border flex items-center justify-center">
          <p>no images found</p>
        </div>
      )}
    </main>
  )
}
