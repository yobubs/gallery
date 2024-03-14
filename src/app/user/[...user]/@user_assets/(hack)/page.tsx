import LoadMore from "@/components/LoadMore"
import { LoadMorePhotos } from "@/components/LoadMorePhotos"
import { Collections, FetchUserAssets } from "@/lib/Unsplash"

export default async function userAssets({
  params,
}: {
  params: { user: string[] }
}) {
  if (params.user[1] === "collections") {
    const collections = await Collections(1, params.user[0])
    return collections ? (
      <>
        {collections}
        <LoadMore loadingMsg="collections" userName={params.user[0]} />{" "}
      </>
    ) : (
      <p className="text-center mt-2 text-muted-foreground">
        no collections found
      </p>
    )
  }

  if (params.user[1] === "likes") {
    const userLikes = await FetchUserAssets(params.user[0], "likes", 1)
    return userLikes ? (
      <LoadMorePhotos
        basePhotos={userLikes}
        userName={params.user[0]}
        userAssets="likes"
      />
    ) : (
      <p className="text-center mt-2 text-muted-foreground">no photos found</p>
    )
  }

  const photos = await FetchUserAssets(params.user[0], "photos", 1)
  return photos ? (
    <LoadMorePhotos
      basePhotos={photos}
      userName={params.user[0]}
      userAssets="photos"
    />
  ) : (
    <p className="text-center mt-2 text-muted-foreground">no photos founded</p>
  )
}
