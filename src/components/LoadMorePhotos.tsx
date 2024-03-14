"use client"

import Image from "next/image"
import ImagesGrid from "./ImagesGrid"
import { useInView } from "react-intersection-observer"
import { useCallback, useEffect, useState } from "react"
import { Photos } from "@/models/type"
import { Loader2 } from "lucide-react"
import {
  FetchCollectionPhotos,
  FetchPhotos,
  FetchSearch,
  FetchUserAssets,
} from "@/lib/Unsplash"
import Link from "next/link"

function PhotosReturnFunction({
  photos,
  noMorePhotos,
  reference,
}: {
  photos: Photos
  noMorePhotos: boolean
  reference: (node?: Element | null | undefined) => void
}) {
  return (
    <>
      <ImagesGrid>
        {photos.map((photo, index) => (
          <Link
            key={index}
            href={`/photo/${photo.id}`}
            scroll={false}
            className="cursor-zoom-in rounded group overflow-hidden"
          >
            <Image
              src={photo.urls.small}
              alt={photo.alt_description ?? ""}
              width={photo.width}
              height={photo.height}
              style={{ backgroundColor: photo.color }}
              className="w-full rounded group-hover:opacity-85 md:group-hover:scale-105 transition-transform"
            />
          </Link>
        ))}
      </ImagesGrid>
      {noMorePhotos ? (
        <div className="mt-5 flex gap-2 py-5 items-center justify-center text-muted-foreground md:text-lg">
          <p>no more photos founded</p>
        </div>
      ) : (
        <div
          ref={reference}
          className="mt-5 flex gap-2 py-5 items-center justify-center text-muted-foreground text-md md:text-lg"
        >
          <p>loading photos</p>
          <Loader2 className=" animate-spin" />
        </div>
      )}
    </>
  )
}

export function LoadMorePhotos({
  basePhotos,
  userName,
  collectionId,
  userAssets,
  searchQuery,
}: {
  basePhotos: Photos
  collectionId?: string
  userName?: string
  userAssets?: "photos" | "likes"
  searchQuery?: string
}) {
  const { ref, inView } = useInView()
  const [photos, setPhotos] = useState(basePhotos)
  const [page, setPage] = useState(2)
  const [noMorePhotos, setNoMorePhotos] = useState(false)

  const fetchMoreCallback = useCallback(async () => {
    const newPhotos =
      searchQuery != undefined
        ? await FetchSearch("photos", searchQuery, page).then(
            (searchResults) => searchResults.results
          )
        : collectionId != undefined
        ? await FetchCollectionPhotos(collectionId, page)
        : userName != undefined
        ? await FetchUserAssets(
            userName,
            userAssets !== undefined ? userAssets : "photos",
            page
          )
        : await FetchPhotos(page)
    if (newPhotos?.length < 1 || !newPhotos) {
      setNoMorePhotos(true)
      return
    }
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos])
    setPage(page + 1)
  }, [
    searchQuery,
    collectionId,
    userName,
    userAssets,
    page,
    setNoMorePhotos,
    setPhotos,
    setPage,
  ])

  useEffect(() => {
    if (inView) fetchMoreCallback()
  }, [inView, fetchMoreCallback])

  return (
    <PhotosReturnFunction
      photos={photos}
      noMorePhotos={noMorePhotos}
      reference={ref}
    />
  )
}
