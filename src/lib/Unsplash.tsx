"use server"

import CollectionsGrid from "@/components/CollectionsGrid"
import {
  Collection,
  Collections as CollectionsType,
  Photo,
  Photos,
  User,
} from "@/models/type"
import Image from "next/image"
import Link from "next/link"

async function unsplashFetch(url: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`,
    },
    next: { revalidate: 172800 },
  })

  if (!response.ok) return null
  return response.json()
}

export async function FetchPhotos(page: number, order_by?: string) {
  const url = `https://api.unsplash.com/photos?page=${page}&per_page=40${
    order_by !== undefined ? `&order_by=${order_by}` : ""
  }`
  const photos: Photos = await unsplashFetch(url)
  return photos
}

export async function FetchPhoto(id: string) {
  const photo: Photo = await unsplashFetch(
    `https://api.unsplash.com/photos/${id}`
  )
  return photo
}

export async function FetchRelatedPhotos(id: string) {
  const relatedPhoto = await unsplashFetch(
    `https://api.unsplash.com/photos/${id}/related`
  )

  return relatedPhoto
}

export async function Collections(
  page: number,
  userName?: string,
  searchQuery?: string
) {
  const url =
    userName !== undefined
      ? `https://api.unsplash.com/users/${userName}/collections?page=${page}&per_page=40`
      : `https://api.unsplash.com/collections?page=${page}&per_page=24`
  const collections: CollectionsType =
    searchQuery !== undefined
      ? await unsplashFetch(
          `https://api.unsplash.com/search/collections/?query=${searchQuery}&page=${page}&per_page=24`
        ).then((searchResults) => searchResults.results)
      : await unsplashFetch(url)

  if (collections.length < 1 || !collections) return null
  return <CollectionsGrid collections={collections} />
}

export async function FetchCollection(id: string) {
  const collection: Collection = await unsplashFetch(
    `https://api.unsplash.com/collections/${id}`
  )

  return collection
}

export async function FetchCollectionPhotos(id: string, page: number) {
  const collectionPhotos: Photos = await unsplashFetch(
    `https://api.unsplash.com/collections/${id}/photos?page=${page}&per_page=40`
  )
  return collectionPhotos
}

export async function FetchUser(userName: string) {
  const user: User = await unsplashFetch(
    `https://api.unsplash.com/users/${userName}`
  )

  return user
}

export async function FetchUserAssets(
  userName: string,
  assetsType: "photos" | "collections" | "likes",
  page: number
) {
  const url = `https://api.unsplash.com/users/${userName}/${assetsType}?page=${page}&per_page=40`

  const userAssets = await unsplashFetch(url)

  return userAssets
}

export async function FetchSearch(
  type: string,
  query: string,
  page: number,
  orientation?: string
) {
  const search = await unsplashFetch(
    `https://api.unsplash.com/search/${type}?query=${query}&page=${page}&per_page=24${
      orientation !== undefined ? `&orientation=${orientation}` : ""
    }`
  )

  return search
}
