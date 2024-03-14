import { LoadMorePhotos } from "@/components/LoadMorePhotos"
import { FetchCollectionPhotos } from "@/lib/Unsplash"

export default async function CollectionsPhotos({
  params,
}: {
  params: { id: string }
}) {
  const collectionPhotos = await FetchCollectionPhotos(params.id, 1)
  return collectionPhotos ? (
    <LoadMorePhotos basePhotos={collectionPhotos} collectionId={params.id} />
  ) : (
    <p>no collection photos found</p>
  )
}
