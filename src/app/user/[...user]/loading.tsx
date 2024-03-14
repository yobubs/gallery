import { Skeleton } from "@/components/ui/skeleton"

export default async function UserDetailsLoading() {
  return (
    <>
      <Skeleton className="h-10 mb-2" />

      <div className="user-container py-5 px-2 min-h-[calc(60dvh-4rem)] md:min-h-[calc(70dvh-4rem)] flex flex-col items-center justify-center gap-6">
        <div className=" flex flex-col md:flex-row items-center justify-center gap-3 w-full md:w-[75%] lg:w-[50%]">
          <Skeleton className="w-[150px] h-[150px]" />

          <div className="w-full">
            <Skeleton className="h-8 mb-2 w-1/2 mx-auto md:mx-0" />

            <Skeleton className="h-20 w-full" />
            <ul className="mt-5 flex justify-center md:justify-start items-center gap-4 w-full">
              {Array(3)
                .fill("")
                .map((_, i) => (
                  <li key={i} className="flex-1">
                    <Skeleton className="h-6 w-full" />
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <ul className="grid grid-cols-2 mt-10 w-96 gap-2">
          <li>
            <Skeleton className="h-20" />
          </li>
          <li>
            <Skeleton className="h-20" />
          </li>
        </ul>
      </div>

      <nav className="mb-3 flex items-center justify-center md:justify-start">
        <ul className="mt-5 flex gap-2">
          {Array(3)
            .fill("")
            .map((_, i) => (
              <li key={i}>
                <Skeleton className="h-8 w-32" />
              </li>
            ))}
        </ul>
      </nav>
    </>
  )
}
