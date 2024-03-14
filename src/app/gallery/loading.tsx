import { Skeleton } from "@/components/ui/skeleton"

export default function GalleryLoading() {
  return (
    <main>
      <Skeleton className="w-full h-10 mb-3" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="aspect-[4/6]" />
          ))}
      </div>
    </main>
  )
}
