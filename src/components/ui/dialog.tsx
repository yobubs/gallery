"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { SearchIcon, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { Button } from "./button"
import { Input } from "./input"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

export function SearchDialog({
  defaultSearchActiveLink,
  customTrigger,
}: {
  defaultSearchActiveLink?: number
  customTrigger?: React.ReactNode
}) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [activeSearchLink, setActiveSearchLnk] = React.useState(
    defaultSearchActiveLink ?? 0
  )
  const searchLinks = [
    {
      title: "Photos",
      description:
        "Explore our curated photo collection—handpicked visuals for instant inspiration and impact.",
    },
    {
      title: "Collections",
      description:
        "Explore curated photo collections for a diverse range of captivating visuals tailored to inspire and elevate your projects.",
    },
    {
      title: "Users",
      description:
        "Discover users, diverse image collections for a unique visual experience, and explore profiles through our user search feature.",
    },
  ]
  const router = useRouter()

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(
      `/s/${searchValue}${
        activeSearchLink !== 0
          ? "/" + searchLinks[activeSearchLink].title.toLowerCase()
          : ""
      }`
    )
    setModalOpen(false)
  }
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      {customTrigger !== undefined ? (
        <DialogTrigger onClick={() => setModalOpen(true)} asChild>
          {customTrigger}
        </DialogTrigger>
      ) : (
        <DialogTrigger
          onClick={() => setModalOpen(true)}
          className="flex-1 md:flex-none md:min-w-64 lg:w-fit border px-4 py-1 flex gap-5 items-center justify-between rounded-lg hover:bg-accent group"
        >
          <p className="whitespace-nowrap hidden md:inline-block text-sm text-muted-foreground group-hover:text-foreground">
            Search for photos, collections, users...
          </p>
          <span className="md:hidden text-sm text-muted-foreground group-hover:text-foreground">
            Search...
          </span>
          <SearchIcon
            size={18}
            className="text-muted-foreground group-hover:text-foreground"
          />
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Search For {searchLinks[activeSearchLink].title}
          </DialogTitle>
          <DialogDescription>
            {searchLinks[activeSearchLink].description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <ul className="flex items-center gap-2 mb-4">
            {searchLinks.map((searchLink, index) => (
              <li key={index} className="flex-1">
                <Button
                  variant={activeSearchLink === index ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setActiveSearchLnk(index)}
                >
                  {searchLink.title}
                </Button>
              </li>
            ))}
          </ul>
          <form onSubmit={onFormSubmit}>
            <Input
              type="text"
              placeholder={`Search for ${searchLinks[activeSearchLink].title}...`}
              autoFocus
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function SearchPhotosDialog() {
  return (
    <SearchComponentDialog
      title="Photos"
      description="Explore our curated photo collection—handpicked visuals for instant inspiration and impact."
    />
  )
}

export function SearchCollectionsDialog() {
  return (
    <SearchComponentDialog
      title="Collections"
      description="Explore curated photo collections for a diverse range of captivating visuals tailored to inspire and elevate your projects."
      assets="collections"
    />
  )
}

export function SearchUsersDialog() {
  return (
    <SearchComponentDialog
      title="Users"
      description="Discover users, diverse image collections for a unique visual experience, and explore profiles through our user search feature."
      assets="users"
    />
  )
}

function SearchComponentDialog({
  title,
  description,
  assets,
}: {
  title: string
  description: string
  assets?: string
}) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const router = useRouter()

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/s/${searchValue}${assets ? "/" + assets : ""}`)
    setModalOpen(false)
  }
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger
        onClick={() => setModalOpen(true)}
        className="w-full border px-4 py-2 flex gap-5 items-center justify-between rounded-lg hover:bg-accent group mb-3"
      >
        <p className="whitespace-nowrap text-muted-foreground group-hover:text-foreground">
          Search for different {title}...
        </p>

        <SearchIcon className="text-muted-foreground group-hover:text-foreground" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search for Different {title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="mt-2">
          <form onSubmit={onFormSubmit}>
            <Input
              type="text"
              placeholder={`Search for ${title.toLowerCase()}...`}
              autoFocus
              className="mb-4"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
