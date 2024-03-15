import { Skeleton } from "@/components/ui/skeleton"

export default function GalleryLoading() {
  return (
    <>
      <div className="flex gap-2 items-center justify-end mb-1">
        <Skeleton className="h-7 md:h-9 w-28 md:w-32" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="aspect-[4/6]" />
          ))}
      </div>
    </>
  )
}
