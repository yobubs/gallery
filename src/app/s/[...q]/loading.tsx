import { Skeleton } from "@/components/ui/skeleton"

export default function SearchLoading() {
  return (
    <div>
      <Skeleton className="h-10 w-40 mt-5 mx-auto md:mx-0" />

      <div className="flex gap-2 mt-10 md:mt-5 mb-3">
        {Array(3)
          .fill("")
          .map((_, i) => (
            <Skeleton key={i} className="h-10 w-32" />
          ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="aspect-[5/6]" />
          ))}
      </div>
    </div>
  )
}
