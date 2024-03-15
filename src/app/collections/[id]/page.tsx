import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FetchCollection } from "@/lib/Unsplash"
import Image from "next/image"
import Link from "next/link"

export default async function CollectionDetailsPage({
  params,
}: {
  params: { id: string }
}) {
  const collection = await FetchCollection(params.id)
  if (!collection) throw new Error("Can't fetch Collection details")
  return (
    <>
      <ul className="text-center md:text-start h-[calc(60dvh-4rem)] md:-h-[calc(80dvh-4rem)] flex flex-col md:flex-row gap-5 items-center rounded-xl overflow-hidden">
        <li className="flex-1 flex flex-col justify-center">
          <Link
            href={`/user/${collection.user.username}`}
            className="flex gap-1 md:gap-2 items-center w-fit mx-auto md:mx-0 mb-1"
          >
            <Avatar className="w-6 h-6 md:h-9 md:w-9">
              <AvatarImage src={collection.user.profile_image.small} />
              <AvatarFallback>
                {collection.user.username.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <p className="text-xs md:text-sm">{collection.user.name}</p>
          </Link>

          <h1 className="text-xl md:text-3xl font-semibold">
            {collection.title}
          </h1>
          <p className="text-xs md:text-base text-muted-foreground">
            {collection.description ?? "no description"}
          </p>
          <ul className="tags flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            {collection.tags.map((tag, index) => (
              <Link key={index} href={`/s/${tag.title.replace(/\s/g, "-")}`}>
                <li className="text-xs md:text-sm rounded-lg bg-accent px-3 py-2">
                  {tag.title}
                </li>
              </Link>
            ))}
          </ul>
        </li>

        <li className="h-full w-full relative flex-1">
          <div className="absolute -top-0 left-0 h-1/3 md:h-full w-full md:w-1/3 z-10 bg-gradient-to-b md:bg-gradient-to-r from-background to-black/0"></div>
          <Image
            src={collection.cover_photo.urls.regular}
            alt={collection.cover_photo.alt_description}
            fill
            style={{ backgroundColor: collection.cover_photo.color }}
            sizes="(min-width: 1360px) 560px, (min-width: 780px) calc(44.64vw - 38px), calc(100vw - 16px)"
            className="object-cover"
          />
        </li>
      </ul>

      <h5 className="mt-16 text-center mb-2 text-muted-foreground text-sm md:text-base">
        {collection.total_photos} PHOTOS
      </h5>
    </>
  )
}
