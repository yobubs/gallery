import { z } from "zod"

const RelatedCollectionsSchema = z.object({
  total: z.number(),
  type: z.enum(["related"]),
  results: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      featured: z.boolean(),
      total_photos: z.number(),
      user: z.object({
        id: z.string(),
        updated_at: z.string(),
        username: z.string(),
        name: z.string(),
        portfolio_url: z.string(),
        location: z.string(),
        profile_image: z.object({
          small: z.string(),
          medium: z.string(),
          large: z.string(),
        }),
      }),
      preview_photos: z.array(
        z.object({
          id: z.string(),
          slug: z.string(),
          created_at: z.string(),
          updated_at: z.string(),
          blurUrl: z.string(),
          urls: z.object({
            raw: z.string(),
            full: z.string(),
            regular: z.string(),
            small: z.string(),
            thumb: z.string(),
            small_s3: z.string(),
          }),
        })
      ),
      tags: z.array(
        z.object({
          title: z.string(),
          type: z.enum(["search", "landing_page"]),
        })
      ),
    })
  ),
})

const PhotoSchema = z.object({
  id: z.string(),
  slug: z.string(),
  width: z.number(),
  height: z.number(),
  blurUrl: z.string(),
  color: z.string(),
  downloads: z.number(),
  likes: z.number(),
  description: z.string(),
  alt_description: z.string(),
  tags: z.array(
    z.object({ title: z.string(), type: z.enum(["search", "landing_page"]) })
  ),
  current_user_collections: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      published_at: z.string(),
      last_collected_at: z.string(),
      updated_at: z.string(),
      cover_photo: z.string(),
      user: z.string(),
    })
  ),
  urls: z.object({
    raw: z.string(),
    full: z.string(),
    regular: z.string(),
    small: z.string(),
    thumb: z.string(),
  }),
  user: z.object({
    id: z.string(),
    username: z.string(),
    name: z.string(),
    bio: z.string(),
    total_likes: z.number(),
    total_photos: z.number(),
    total_collections: z.number(),
    profile_image: z.object({
      small: z.string(),
      medium: z.string(),
      large: z.string(),
    }),
  }),
  views: z.number(),
  related_collections: RelatedCollectionsSchema,
})

const PhotosSchema = z.array(PhotoSchema)
const RelatedPhotosSchema = z.object({
  total: z.number(),
  results: PhotosSchema,
})

const UserSchema = z.object({
  id: z.string(),
  updated_at: z.string(),
  username: z.string(),
  name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  portfolio_url: z.string(),
  bio: z.string(),
  profile_image: z.object({
    small: z.string(),
    medium: z.string(),
    large: z.string(),
  }),
  instagram_username: z.string(),
  total_collections: z.number(),
  total_likes: z.number(),
  total_photos: z.number(),
  total_promoted_photos: z.number(),
  accepted_tos: z.boolean(),
  for_hire: z.boolean(),
  social: z.object({
    instagram_username: z.string(),
    portfolio_url: z.string(),
    twitter_username: z.string(),
    paypal_email: z.string(),
  }),
  tags: z.object({
    custom: z.array(
      z.object({
        type: z.string(),
        title: z.string(),
      })
    ),
  }),
  photos: z.array(PhotoSchema),
})

const CollectionDetailsSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  featured: z.boolean(),
  total_photos: z.number(),
  private: z.boolean(),
  share_key: z.string(),
  tags: z.array(
    z.object({
      title: z.string(),
      type: z.enum(["search", "landing_page"]),
    })
  ),
  user: UserSchema,
  cover_photo: PhotoSchema,
})
const CollectionsSchema = z.array(CollectionDetailsSchema)

const SearchPhotoSchema = z.object({
  total: z.number(),
  results: z.array(PhotoSchema),
})
const SearchCollectionSchema = z.object({
  total: z.number(),
  results: z.array(CollectionDetailsSchema),
})
const SearchUserSchema = z.object({
  total: z.number(),
  results: z.array(UserSchema),
})

export type Photo = z.infer<typeof PhotoSchema>
export type Photos = z.infer<typeof PhotosSchema>
export type RelatedPhotos = z.infer<typeof RelatedPhotosSchema>
export type RelatedCollections = z.infer<typeof RelatedCollectionsSchema>
export type User = z.infer<typeof UserSchema>
export type Collection = z.infer<typeof CollectionDetailsSchema>
export type Collections = z.infer<typeof CollectionsSchema>

export type SearchPhoto = z.infer<typeof SearchPhotoSchema>
export type SearchCollections = z.infer<typeof SearchCollectionSchema>
export type SearchUser = z.infer<typeof SearchUserSchema>
