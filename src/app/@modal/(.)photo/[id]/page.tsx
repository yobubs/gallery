import DownloadImage from "@/components/DownloadImage"
import RelatedCollection from "@/components/sections/RelatedCollection"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FetchPhoto } from "@/lib/Unsplash"
import { Photo } from "@/models/type"
import Image from "next/image"
import Link from "next/link"

export default async function PhotoDetails({
  params,
}: {
  params: { id: string }
}) {
  const photo = await FetchPhoto(params.id)

  if (!photo) throw Error("cant fetch the photo")

  return (
    <div>
      <div className="w-full md:w-fit mx-auto mb-4">
        <div className="flex items-center justify-between mb-3">
          <Link href={`/user/${photo.user.username}`} target="_blank">
            <div className="flex items-center gap-2 overflow-hidden">
              <Avatar>
                <AvatarImage src={photo.user.profile_image.small} />
                <AvatarFallback>
                  {photo.user.username.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <p>{photo.user.username}</p>
            </div>
          </Link>

          <div className="relative">
            <div className="absolute -left-0 -translate-x-full top-0 h-full w-20 bg-gradient-to-l from-background from-60% to-black/0"></div>
            <DownloadImage
              url={photo.urls.raw ?? photo.urls.regular}
              fileName={photo.slug}
            />
          </div>
        </div>

        <Link href={`${photo.urls.full}`} target="_blank">
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description ?? "broken image"}
            height={photo.height}
            width={photo.width}
            style={{ backgroundColor: photo.color }}
            className="h-fit w-full md:h-dvh md:w-fit rounded-md"
          />
        </Link>
      </div>

      <ul className="tags flex justify-center flex-wrap gap-2 mb-16">
        {photo.tags.map((tag, index) => (
          <li key={index}>
            <a key={index} href={`/s/${tag.title.replace(/\s/g, "-")}`}>
              <p className=" rounded-lg bg-accent px-3 py-2">{tag.title}</p>
            </a>
          </li>
        ))}
      </ul>

      <RelatedCollection related_collections={photo.related_collections} />
    </div>
  )
}
