// import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import { genPageMetadata } from 'app/seo'
// import ListLayout from '@/layouts/ListLayoutWithTags'

// const POSTS_PER_PAGE = 5

// export const metadata = genPageMetadata({ title: 'Blog' })

// export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
//   const posts = allCoreContent(sortPosts(allBlogs))
//   const pageNumber = 1
//   const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
//   const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
//   const pagination = {
//     currentPage: pageNumber,
//     totalPages: totalPages,
//   }

//   return (
//     <ListLayout
//       posts={posts}
//       initialDisplayPosts={initialDisplayPosts}
//       pagination={pagination}
//       title="All Posts"
//     />
//   )
// }
export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-12 text-5xl font-extrabold tracking-tight md:text-6xl">Coming soon!</h1>
    </main>
  )
}
