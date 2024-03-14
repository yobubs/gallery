import { Button } from "@/components/ui/button"
import { SearchUsersDialog } from "@/components/ui/dialog"
import { FetchUser } from "@/lib/Unsplash"
import { User } from "@/models/type"
import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaPaypal, FaTwitter } from "react-icons/fa6"

export async function generateMetadata({
  params,
}: {
  params: { user: string[] }
}): Promise<Metadata> {
  const user: User = await FetchUser(params.user[0])
  return {
    title: user?.name ?? "LuminaVision",
  }
}

export default async function UserDetailsPage({
  params,
}: {
  params: { user: string[] }
}) {
  const user = await FetchUser(params.user[0])

  const navlinks = [
    {
      title: "Photos",
      total: user.total_photos,
      href: `/user/${user.username}`,
    },
    {
      title: "Collections",
      total: user.total_collections,
      href: `/user/${user.username}/collections`,
    },
    {
      title: "Likes",
      total: user.total_likes,
      href: `/user/${user.username}/likes`,
    },
  ]

  if (!user)
    return (
      <main className="h-[calc(100dvh-3.5rem)] flex flex-col gap-2 items-center justify-center">
        <h1 className="text-2xl ">No User Found</h1>
        <Link href={"/gallery"}>
          <Button>
            <ChevronLeft size={20} />
            Gallery
          </Button>
        </Link>
      </main>
    )
  return (
    <>
      <SearchUsersDialog />

      <div className="user-details rounded border text-center md:text-start user-container py-5 px-2 min-h-[calc(60dvh-4rem)] md:min-h-[calc(70dvh-4rem)] flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:max-w-[75%] lg:max-w-[60%]">
          <Image
            src={user.profile_image.large}
            alt={`${user.name} image`}
            width={150}
            height={150}
            quality={100}
            className="rounded-md bg-accent"
          />

          <div>
            <div className="flex gap-2 items-start justify-center md:justify-start">
              <h1 className="text-xl md:text-2xl whitespace-nowrap">
                {user.name}
              </h1>
              <p className="text-xs bg-accent p-1 rounded-lg">
                {user.for_hire === true ? (
                  <Link href={`${user.portfolio_url}`} target="_blank">
                    for hire
                  </Link>
                ) : (
                  <span className="cursor-not-allowed">not for hire</span>
                )}
              </p>
            </div>

            <p className="text-muted-foreground text-sm md:text-base">
              {user.bio ?? "no bio"}
            </p>
            <ul className="mt-5 flex justify-center md:justify-start items-center gap-4">
              <li className="flex items-center gap-1">
                <FaInstagram size={18} />
                <p className="text-muted-foreground text-xs md:text-sm">
                  {user.social.instagram_username ?? "not specified"}
                </p>
              </li>
              <li className="flex items-center gap-1">
                <FaTwitter size={18} />
                <p className="text-muted-foreground text-xs md:text-sm">
                  {user.social.twitter_username ?? "not specified"}
                </p>
              </li>
              <li className="flex items-center gap-1">
                <FaPaypal size={18} />
                <p className="text-muted-foreground text-xs md:text-sm">
                  {user.social.paypal_email ?? "not specified"}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className=" mt-2">
          <p className="text-center text-xs md:text-base">tags :</p>
          {user.tags.custom.length > 1 ? (
            <ul className="tags flex justify-center flex-wrap gap-2 mt-1">
              {user.tags.custom.map((tag, index) => (
                <li key={index}>
                  <Link
                    key={index}
                    href={`/s/${tag.title.replace(/\s/g, "-")}`}
                  >
                    <p className="text-xs md:text-base rounded-lg bg-accent px-3 py-2">
                      {tag.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-muted-foreground text-xs md:text-base">
              no tags
            </p>
          )}
        </div>

        <ul className="grid grid-cols-2 text-center mt-10">
          <li className="border-r px-2 mr-2">
            <h3 className="mb-1 text-sm text-muted-foreground">total photos</h3>
            <p className="text-xl md:text-2xl"> {user.total_photos}</p>
          </li>
          <li className="px-2">
            <h3 className="mb-1 text-sm text-muted-foreground">
              total promoted photos
            </h3>
            <p className="text-xl md:text-2xl">{user.total_promoted_photos}</p>
          </li>
        </ul>
      </div>

      <nav className="mb-3 flex items-center justify-center md:justify-start mt-10 md:mt-5">
        <ul className="flex gap-2 w-fit">
          {navlinks.map((asset, index) => (
            <li key={index}>
              <Link href={asset.href}>
                <Button
                  variant={
                    params.user[1]
                      ? params.user[1] == asset.title.toLowerCase()
                        ? "default"
                        : "outline"
                      : index === 0
                      ? "default"
                      : "outline"
                  }
                  className="gap-2"
                >
                  <p className="text-xs md:text-bse">{asset.title}</p>
                  <span className="text-xs md:text-base text-muted-foreground ">
                    {asset.total}
                  </span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
