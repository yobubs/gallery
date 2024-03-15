import { RelatedCollections } from "@/models/type"
import Image from "next/image"
import Link from "next/link"

export default function RelatedCollection({
  related_collections,
}: {
  related_collections: RelatedCollections
}) {
  if (!related_collections?.results[0])
    return (
      <section>
        <h2 className="text-xl md:text-2xl mb-2 text-center md:text-start">
          Related Collections
        </h2>

        <p>no collections</p>
      </section>
    )

  return (
    <section>
      <h2 className="text-xl md:text-2xl mb-2 text-center md:text-start">
        Related Collections
      </h2>
      <ul className=" grid grid-cols-2 md:grid-cols-3 gap-5 text-center md:text-start">
        {related_collections.results.map((related_collection) => (
          <li key={related_collection.id}>
            <a
              href={`/collections/${related_collection.id}`}
              className="hover:opacity-80"
            >
              {related_collection.preview_photos.length < 3 ? (
                <ul className="w-full aspect-[10/7] rounded-md overflow-hidden ">
                  <li className="relative h-full overflow-hidden">
                    <Image
                      src={related_collection.preview_photos[0].urls.regular}
                      alt={related_collection.preview_photos[0].slug}
                      sizes="(min-width: 1360px) 195px, (min-width: 780px) 14.82vw, calc(50vw - 22px)"
                      fill
                      className="object-cover opacity-70"
                    />

                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                      <p className="text-xl font-semibold">
                        {related_collection.total_photos}
                      </p>
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="grid grid-cols-2 gap-1 aspect-[10/7]  rounded-md overflow-hidden hover:opacity-75">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <li
                        key={i}
                        className={`relative h-full overflow-hidden ${
                          i == 0 && "row-span-2"
                        }`}
                      >
                        <Image
                          src={
                            related_collection.preview_photos[i].urls.regular
                          }
                          alt={related_collection.preview_photos[i].slug}
                          sizes="(min-width: 1360px) 195px, (min-width: 780px) 14.82vw, calc(50vw - 22px)"
                          fill
                          className="bg-accent object-cover"
                        />

                        {i === 2 && (
                          <div className="bg-black/40 text-white absolute h-full w-full flex items-center justify-center">
                            <p className="text-xl font-semibold">
                              {related_collection.total_photos - 2} +
                            </p>
                          </div>
                        )}
                      </li>
                    ))}
                </ul>
              )}
            </a>

            <a
              href={`/collections/${related_collection.title}`}
              className="flex w-fit"
            >
              <p className="text-lg md:text-xl font-semibold">
                {related_collection.title}
              </p>
            </a>

            <div className="text-muted-foreground text-sm flex items-center gap-2 ">
              <p>by:</p>
              <Link
                href={`/user/${related_collection.user.username}`}
                target="_blank"
                className="underline underline-offset-4"
              >
                {related_collection.user.name}
              </Link>
            </div>
            <ul className="tags flex flex-wrap justify-center md:justify-start gap-2 mt-3">
              {related_collection.tags.map((collection_tag, index) => (
                <a
                  key={index}
                  href={`/s/${collection_tag.title.replace(/\s/g, "-")}`}
                >
                  <li className="text-xs md:text-sm rounded-lg bg-accent px-3 py-2">
                    {collection_tag.title}
                  </li>
                </a>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
