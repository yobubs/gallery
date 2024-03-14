import { Suspense } from "react"
import UserDetailsLoading from "./loading"

type Props = {
  children: React.ReactNode
  user_assets: React.ReactNode
}
export default function UserDetailsLayout({ children, user_assets }: Props) {
  return (
    <main>
      <Suspense fallback={<UserDetailsLoading />}>
        {children}
        {user_assets}
      </Suspense>
    </main>
  )
}
