import LoadMore, { LoadMoreUsersSearch } from "@/components/LoadMore"
import { LoadMorePhotos } from "@/components/LoadMorePhotos"
import { Collections, FetchSearch } from "@/lib/Unsplash"

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: { q: string[] }
  searchParams: { orientation: string }
}) {
  const assetType = params.q[1] ?? "photos"

  const search =
    assetType == "collections"
      ? await Collections(1, undefined, params.q[0])
      : await FetchSearch(
          assetType,
          params.q[0],
          1,
          searchParams.orientation ?? undefined
        )

  return search.results < 1 ? (
    <div className="py-10 px-2 md:w-2/3 text-center md:text-start">
      <h5 className="text-xl md:text-2xl mb-1">Sorry, no results found</h5>
      <p className="text-sm text-muted-foreground">
        It seems that your search did not match any items. Please try using
        different keywords, refining your search, or explore our categories to
        find what you<span>&#39;</span>re looking for.
      </p>
    </div>
  ) : (
    <>
      {assetType == "photos" && (
        <LoadMorePhotos
          basePhotos={search.results}
          searchQuery={params.q[0]}
          orientation={searchParams.orientation}
        />
      )}

      {assetType == "collections" && (
        <>
          {search}

          <LoadMore loadingMsg="collections" searchQuery={params.q[0]} />
        </>
      )}

      {assetType === "users" && (
        <LoadMoreUsersSearch
          baseData={search.results}
          searchQuery={params.q[0]}
        />
      )}
    </>
  )
}
