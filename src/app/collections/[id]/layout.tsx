import React, { Suspense } from "react"
import BackButton from "@/components/BackButton"
import CollectionDetailsLoading from "./loading"

export default function CollectionDetailsLayout({
  children,
  collection_photos,
}: {
  children: React.ReactNode
  collection_photos: React.ReactNode
}) {
  return (
    <main>
      <BackButton />
      <Suspense fallback={<CollectionDetailsLoading />}>
        {children}

        {collection_photos}
      </Suspense>
    </main>
  )
}
