import { Skeleton } from "@/components/ui/skeleton"

export default function CollectionsLoading() {
  return (
    <main>
      <ul className="collections-loading grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array(12)
          .fill("")
          .map((_, i) => (
            <li
              key={i}
              className="relative aspect-[2/1] rounded-xl overflow-hidden"
            >
              <Skeleton className="w-full h-full" />
            </li>
          ))}
      </ul>
    </main>
  )
}
