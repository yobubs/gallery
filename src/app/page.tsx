import Hero from "@/components/sections/Hero"
import Section1 from "@/components/sections/Section1"
import Section2 from "@/components/sections/Section2"
import Section3 from "@/components/sections/Section3"
import { MoveDownIcon } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex justify-center">
        <MoveDownIcon className="animate-bounce" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  )
}
