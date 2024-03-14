// import { Loader2 } from "lucide-react"

// export default function PhotoDetailsLoading() {
//   return (
//     <div className="h-[70dvh] w-full flex items-center justify-center">
//       <Loader2 className="animate-spin" />
//     </div>
//   )
// }

import { Skeleton } from "@/components/ui/skeleton"

export default function PhotoDetailsLoading() {
  return (
    <>
      <div className="w-full md:w-fit mx-auto mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-6 w-24" />
          </div>

          <div>
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        <Skeleton className="h-96 md:h-dvh w-full md:w-fit aspect-[2/3]" />
      </div>

      <ul className="tags flex justify-center flex-wrap gap-2 mb-16">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <li key={index}>
              <Skeleton className="h-10 w-20" />
            </li>
          ))}
      </ul>

      <div>
        <Skeleton className="h-10 w-60 mb-2 mx-auto md:mx-0" />
        <ul className=" grid grid-cols-2 md:grid-cols-3 gap-5 mb-2">
          {Array(3)
            .fill("")
            .map((_, i) => (
              <li key={i}>
                <ul className="grid grid-cols-2 gap-1 aspect-[10/7]  rounded-md overflow-hidden hover:opacity-75 mb-2">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <li
                        key={i}
                        className={`relative h-full overflow-hidden ${
                          i == 0 && "row-span-2"
                        }`}
                      >
                        <Skeleton className="w-full h-full" />
                      </li>
                    ))}
                </ul>

                <Skeleton className="h-8 w-32 mb-2 " />

                <Skeleton className="w-1/2 h-6 mb-2" />
                <ul className="grid grid-cols-4 gap-2">
                  {Array(4)
                    .fill("")
                    .map((_, index) => (
                      <li key={index}>
                        <Skeleton className="h-8 w-full" />
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}
