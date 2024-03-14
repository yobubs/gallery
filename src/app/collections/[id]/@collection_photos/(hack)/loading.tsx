import { Skeleton } from "@/components/ui/skeleton"

export default function RelatedCollectionsPhotosLoading() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <li key={i}>
            <Skeleton className="aspect-[4/5]" />
          </li>
        ))}
    </ul>
  )
}
