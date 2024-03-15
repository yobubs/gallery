import LoadMore from "@/components/LoadMore"
import { Collections } from "@/lib/Unsplash"

export default async function CollectionPage() {
  const collections = await Collections(1)

  return collections ? (
    <>
      {collections}
      <LoadMore loadingMsg="collections" />
    </>
  ) : (
    <div className="h-calcHeightWithSeach flex items-center justify-center">
      <h2 className="text-xl md:text-2xl">no collections found</h2>
    </div>
  )
}
