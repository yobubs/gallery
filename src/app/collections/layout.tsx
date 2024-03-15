import { Suspense } from "react"
import CollectionsLoading from "./loading"
import { SearchCollectionsDialog } from "@/components/ui/dialog"

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Suspense fallback={<CollectionsLoading />}>
        <SearchCollectionsDialog />
        {children}
      </Suspense>
    </main>
  )
}
