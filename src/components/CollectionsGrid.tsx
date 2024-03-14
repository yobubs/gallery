import Image from "next/image"
import Link from "next/link"
import { MotionLi } from "./MotionElements"
import { Collections } from "@/models/type"

export default function CollectionsGrid({
  collections,
}: {
  collections: Collections
}) {
  return (
    <ul className="collection-images grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {collections.map((collection, index) => (
        <MotionLi
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: index % 2 == 0 ? -15 : 15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: index * 0.1,
          }}
          className="relative aspect-[2/1] border rounded-xl overflow-hidden"
        >
          <Link
            href={`/collections/${collection.id}`}
            className="hover:opacity-60 group"
          >
            <Image
              src={
                collection.cover_photo.urls.small ??
                collection.cover_photo.urls.regular
              }
              alt={collection.cover_photo.alt_description ?? "broken image"}
              fill
              sizes="(min-width: 1360px) 286px, (min-width: 1040px) calc(20vw + 18px), (min-width: 780px) calc(33.33vw - 39px), calc(50vw - 18px)"
              style={{ backgroundColor: collection.cover_photo.color }}
              className="object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center px-2">
              <p className="group-hover:scale-0 font-bold text-center text-white text-sm md:text-base transition-transform">
                {collection.title}
              </p>
              <p className="scale-0 absolute group-hover:scale-100 font-bold text-center text-white text-sm md:text-base transition-transform">
                {collection.total_photos}+
              </p>
            </div>
          </Link>
        </MotionLi>
      ))}
    </ul>
  )
}
