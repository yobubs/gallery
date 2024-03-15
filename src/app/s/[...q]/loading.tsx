import { Skeleton } from "@/components/ui/skeleton"

export default function SearchLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} className="aspect-square" />
        ))}
    </div>
  )
}
