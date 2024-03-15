"use client"

import { Collections, FetchSearch } from "@/lib/Unsplash"
import { User } from "@/models/type"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { MotionLi } from "./MotionElements"

type Props = {
  loadingMsg: string
  userName?: string
  searchQuery?: string
  baseData?: Promise<JSX.Element | null>
}

export default function LoadMore({ loadingMsg, userName, searchQuery }: Props) {
  const { ref, inView } = useInView()
  const [datas, setDatas] = useState<React.ReactNode[]>([])
  const [noMoreData, setNoMoreData] = useState(false)
  const [page, setPage] = useState(2)

  const fetchMoreCallback = useCallback(async () => {
    const newData =
      searchQuery !== undefined
        ? await Collections(page, undefined, searchQuery)
        : userName !== undefined
        ? await Collections(page, userName)
        : await Collections(page)
    if (!newData) {
      setNoMoreData(true)
      return
    }
    setDatas((prevDatas) => [...prevDatas, newData])
    setPage((prevPage) => prevPage + 1)
  }, [userName, searchQuery, page, setDatas, setPage, setNoMoreData])

  useEffect(() => {
    if (inView) fetchMoreCallback()
  }, [inView, fetchMoreCallback])
  return (
    <>
      {datas?.map((data) => (
        <>
          <div className="mt-4"></div>
          {data}
        </>
      ))}
      {noMoreData ? (
        <div className="mt-5 flex gap-2 py-5 items-center justify-center text-muted-foreground md:text-lg">
          <p>no more {loadingMsg} founded</p>
        </div>
      ) : (
        <div
          ref={ref}
          className="mt-5 flex gap-2 py-5 items-center justify-center text-muted-foreground text-md md:text-lg"
        >
          <p>loading {loadingMsg ?? ""}</p>
          <Loader2 className=" animate-spin" />
        </div>
      )}
    </>
  )
}

export function LoadMoreUsersSearch({
  searchQuery,
  baseData,
}: {
  baseData: any[]
  searchQuery: string
}) {
  const { ref, inView } = useInView()
  const [datas, setDatas] = useState<React.ReactNode[]>([
    <UsersGrid datas={baseData} key={0} />,
  ])
  const [noMoreData, setNoMoreData] = useState(false)
  const [page, setPage] = useState(2)

  const fetchMoreCallback = useCallback(async () => {
    const res = await FetchSearch("users", searchQuery, page)
    if (!res || res.results < 1) {
      setNoMoreData(true)
      return
    }

    const newData = <UsersGrid datas={res.results} />
    setDatas([...datas, newData])
    setPage(page + 1)
  }, [searchQuery, page, datas, setDatas, setPage, setNoMoreData])

  useEffect(() => {
    if (inView) fetchMoreCallback()
  }, [inView, fetchMoreCallback])

  return (
    <>
      {datas.map((data, i) => (
        <div key={i}>{data}</div>
      ))}
      {noMoreData ? (
        <div className="mt-5 flex gap-2 py-5 items-center justify-center text-muted-foreground md:text-lg">
          <p>no more users founded</p>
        </div>
      ) : (
        <div
          ref={ref}
          className="mt-5 flex gap-2 py-5 items-center justify-center text-muted-foreground text-md md:text-lg"
        >
          <p>loading users</p>
          <Loader2 className=" animate-spin" />
        </div>
      )}
    </>
  )
}

function UsersGrid({ datas }: { datas: any[] }) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-5 px-3 md:px-0">
      {datas.map((user: User, i: number) => (
        <MotionLi
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: i * 0.1 } }}
          className="hover:bg-accent"
        >
          <Link href={`/user/${user.username}`}>
            <div className="px-3 py-4 rounded border flex flex-col md:flex-row gap-2 md:gap-3 items-center justify-center h-full w-full">
              <Image
                src={user.profile_image?.large ?? user.profile_image?.medium}
                height={150}
                width={150}
                alt="profile image"
                className="rounded "
              />
              <div className="text-center md:text-start flex-1">
                <h3 className="md:text-lg">{user.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-4">
                  {user.bio ?? "no bio"}
                </p>
              </div>
            </div>
          </Link>
        </MotionLi>
      ))}
    </ul>
  )
}
