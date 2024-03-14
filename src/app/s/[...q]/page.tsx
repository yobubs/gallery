import LoadMore, { LoadMoreUsersSearch } from "@/components/LoadMore"
import { LoadMorePhotos } from "@/components/LoadMorePhotos"
import { Button } from "@/components/ui/button"
import { FetchSearch } from "@/lib/Unsplash"
import Link from "next/link"

export default async function SearchPage({
  params,
}: {
  params: { q: string[] }
}) {
  const assetType = params.q[1] ?? "photos"

  const searchPromise = FetchSearch(assetType, params.q[0], 1)
  const searchPhotosTotalPromise = FetchSearch("photos", params.q[0], 1).then(
    (res) => res.total
  )
  const searchCollectionsTotalPromise = FetchSearch(
    "collections",
    params.q[0],
    1
  ).then((res) => res.total)

  const searchUserTotalPromise = FetchSearch("users", params.q[0], 1).then(
    (res) => res.total
  )

  const [search, searchPhotosTotal, searchCollectionsTotal, searchUserTotal] =
    await Promise.all([
      searchPromise,
      searchPhotosTotalPromise,
      searchCollectionsTotalPromise,
      searchUserTotalPromise,
    ])

  const navlinks = [
    {
      title: "Photos",
      href: `/s/${params.q[0]}`,
      total: searchPhotosTotal ?? 0,
    },
    {
      title: "Collections",
      href: `/s/${params.q[0]}/collections`,
      total: searchCollectionsTotal ?? 0,
    },
    {
      title: "Users",
      total: searchUserTotal ?? 0,
    },
  ]

  return (
    <>
      <h4 className="text-xl md:text-2xl text-center md:text-start mt-5">
        Results for <span className="font-semibold">{params.q[0]}</span>
      </h4>

      <nav className="mb-3 flex items-center justify-center md:justify-start mt-10 md:mt-5">
        <ul className="flex gap-2 w-fit">
          {navlinks.map((asset, index) => (
            <li key={index}>
              <Link
                href={`/s/${params.q[0]}/${asset.title.toLocaleLowerCase()}`}
              >
                <Button
                  variant={
                    params.q[1]
                      ? params.q[1] == asset.title.toLowerCase()
                        ? "default"
                        : "outline"
                      : index === 0
                      ? "default"
                      : "outline"
                  }
                  className="gap-2"
                >
                  <p className="text-xs md:text-base">{asset.title}</p>
                  <span className="text-xs md:text-base text-muted-foreground ">
                    {asset.total}
                  </span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {search.results < 1 ? (
        <div className="py-10 px-2 md:w-2/3 text-center md:text-start">
          <h5 className="text-xl md:text-2xl mb-1">Sorry, no results found</h5>
          <p className="text-sm text-muted-foreground">
            It seems that your search did not match any items. Please try using
            different keywords, refining your search, or explore our categories
            to find what you<span>&#39;</span>re looking for.
          </p>
        </div>
      ) : (
        <>
          {assetType == "photos" && (
            <LoadMorePhotos
              basePhotos={search.results}
              searchQuery={params.q[0]}
            />
          )}

          {assetType == "collections" && (
            <LoadMore loadingMsg="collections" searchQuery={params.q[0]} />
          )}

          {assetType === "users" && (
            <LoadMoreUsersSearch
              baseData={search.results}
              searchQuery={params.q[0]}
            />
          )}
        </>
      )}
    </>
  )
}
