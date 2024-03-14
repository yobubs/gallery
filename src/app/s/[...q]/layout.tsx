import { Suspense } from "react"
import SearchLoading from "./loading"

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Suspense fallback={<SearchLoading />}>{children}</Suspense>
    </main>
  )
}
