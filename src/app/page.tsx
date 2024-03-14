import HeroSection from "@/components/sections/Hero"
import Section1 from "@/components/sections/Section1"
import Section2 from "@/components/sections/Section2"
import Section3 from "@/components/sections/Section3"
import { MoveDownIcon } from "lucide-react"

export default async function Home() {
  const res = await fetch(
    "https://api.unsplash.com/photos?page=1&per_page=40",
    {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`,
      },
    }
  )

  const photos = await res.json()
  return (
    <main>
      <HeroSection className="relative py-10 rounded-2xl mt-2" />

      <div className="flex justify-center">
        <MoveDownIcon className="animate-bounce" />
      </div>

      <Section1 className="md:h-dvh py-20 flex items-center justify-center" />
      <Section2 className="md:h-dvh py-20 flex items-center justify-center" />
      <Section3 className="py-20" photos={photos} />
    </main>
  )
}
