import { Suspense } from "react"
import SearchLoading from "./loading"
import { FetchSearch } from "@/lib/Unsplash"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OrientationMenu } from "@/components/ui/dropdown-menu"

export default async function SearchLayout({
  params,
  children,
}: {
  params: { q: string[] }
  children: React.ReactNode
}) {
  const searchTotalPromise = (type: string) =>
    FetchSearch(type, params.q[0], 1).then((res) => res.total)

  const searchPhotosTotalPromise = searchTotalPromise("photos")
  const searchCollectionsTotalPromise = searchTotalPromise("collections")
  const searchUserTotalPromise = searchTotalPromise("users")

  const [searchPhotosTotal, searchCollectionsTotal, searchUserTotal] =
    await Promise.all([
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
    <main>
      <h4 className="text-xl md:text-2xl text-center md:text-start mt-5">
        Results for <span className="font-semibold">{params.q[0]}</span>
      </h4>

      <nav className="mb-2 sm:mb-3 flex items-center flex-col sm:flex-row justify-center sm:justify-between gap-5 mt-10 md:mt-5">
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

        <div
          className={`self-end sm:self-center ${
            params.q[1] === "collections"
              ? "hidden"
              : params.q[1] == "users" && "hidden"
          }`}
        >
          <OrientationMenu searchQuery={params.q[0]} />
        </div>
      </nav>

      <Suspense fallback={<SearchLoading />}>{children}</Suspense>
    </main>
  )
}
