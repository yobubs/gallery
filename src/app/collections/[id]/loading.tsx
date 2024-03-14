import { Skeleton } from "@/components/ui/skeleton"

export default function CollectionDetailsLoading() {
  return (
    <ul className="mb-10 h-[calc(60dvh-4rem)] md:-h-[calc(80dvh-4rem)] flex flex-col md:flex-row gap-5 items-center rounded-xl overflow-hidden">
      <li className="flex-1 flex flex-col justify-center items-center md:items-start">
        <div className="flex gap-1 items-center w-fit mx-auto md:mx-0 mb-1">
          <Skeleton className="rounded-full w-6 h-6 md:h-9 md:w-9" />
          <Skeleton className="w-20 h-5" />
        </div>

        <Skeleton className="h-7 w-52" />
        <Skeleton className="h-20 w-96 md:w-full mt-2" />

        <ul className="w-full tags grid grid-cols-4 gap-2 mt-4">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <li key={i}>
                <Skeleton className="h-7 rounded-xl" />
              </li>
            ))}
        </ul>
      </li>

      <li className="h-full w-full relative flex-1">
        <div className="absolute -top-0 left-0 h-1/3 md:h-full w-full md:w-1/3 z-10 bg-gradient-to-b md:bg-gradient-to-r from-background to-black/0"></div>

        <Skeleton className="flex-1 w-full h-full" />
      </li>
    </ul>
  )
}
