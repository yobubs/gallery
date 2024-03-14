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
            <div key={index} className="rounded overflow-hidden group">
              <Link
                href={`/photo/${photo.id}`}
                scroll={false}
                className="cursor-zoom-in"
              >
                <Image
                  src={photo.urls.regular ?? photo.urls.raw}
                  alt={photo.alt_description ?? "broken image"}
                  width={photo.width}
                  height={photo.height}
                  style={{ backgroundColor: photo.color }}
                  className="group-hover:scale-110 group-hover:opacity-75 transition-transform ease-in-out"
                />
              </Link>
            </div>
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
