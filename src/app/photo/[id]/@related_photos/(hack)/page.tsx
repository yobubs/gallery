import ImagesGrid from "@/components/ImagesGrid"
import { FetchRelatedPhotos } from "@/lib/Unsplash"
import { RelatedPhotos } from "@/models/type"
import Image from "next/image"
import Link from "next/link"

export default async function RelatedPhotosPage({
  params,
}: {
  params: { id: string }
}) {
  const photos: RelatedPhotos = await FetchRelatedPhotos(params.id)
  return (
    <>
      <h2 className="text-xl md:text-2xl mb-2 text-center md:text-start mt-16">
        Related Photos
      </h2>
      {photos?.results ? (
        <ImagesGrid>
          {photos.results.map((photo, index) => (
            <Link
              key={index}
              href={`/photo/${photo.id}`}
              scroll={false}
              className="cursor-zoom-in rounded group overflow-hidden"
            >
              <Image
                src={photo.urls.small}
                alt={photo.alt_description ?? ""}
                width={photo.width}
                height={photo.height}
                style={{ backgroundColor: photo.color }}
                className="w-full rounded group-hover:opacity-85 md:group-hover:scale-105 transition-transform"
              />
            </Link>
          ))}
        </ImagesGrid>
      ) : (
        <div className="h-[calc(100dvh-3.5rem)] border flex items-center justify-center">
          <p>no images found</p>
        </div>
      )}
    </>
  )
}
