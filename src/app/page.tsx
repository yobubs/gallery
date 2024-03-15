import HeroSection from "@/components/sections/Hero"
import Section1 from "@/components/sections/Section1"
import Section2 from "@/components/sections/Section2"
import Section3 from "@/components/sections/Section3"
import { MoveDownIcon } from "lucide-react"

export default async function Home() {
  const res = await fetch(
    "https://api.unsplash.com/photos?page=9&per_page=40&order_by=popular",
    {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`,
      },
    }
  )

  const photos = await res.json()
  return (
    <main>
      <HeroSection className="relative py-10 rounded-2xl " />

      <div className="flex justify-center mt-2">
        <MoveDownIcon className="animate-bounce" />
      </div>

      <Section1 className="md:h-dvh py-20 flex items-center justify-center" />
      <Section2 className="md:h-dvh py-20 flex items-center justify-center" />
      <Section3 className="py-20" photos={photos} />
    </main>
  )
}
