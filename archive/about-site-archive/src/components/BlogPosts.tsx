import { Link } from "react-router-dom"

import { useBlogPostIndex } from "../hooks/useBlogPostIndex"
import { BlogPost } from "../types/BlogPost"

type Props = {
  className?: string
}

const BlogPosts = ({ className }: Props) => {
  const { status, data: blogPostIndex } = useBlogPostIndex()

  const blogPosts =
    status === "loading" ? (
      <div className="animate-pulse">Loading blog posts...</div>
    ) : status === "error" ? (
      <div>Error loading blog posts 😢</div>
    ) : (
      <div className="w-full flex flex-row flex-wrap gap-3">
        {blogPostIndex?.map((blogPost: BlogPost) => (
          <Link
            className="px-4 py-2 flex flex-col rounded-xl bg-white shadow hover:shadow-lg transition"
            to={`/posts/${blogPost.slug}`}
            key={blogPost.id}
          >
            <code className="text-sm text-gray-600">{blogPost.id}</code>
            <h2 className="font-medium text-gray-900">{blogPost.title}</h2>
            <time
              className="text-sm text-gray-600"
              dateTime={blogPost.date.toString()}
            >
              {blogPost.date.toDateString()}
            </time>
          </Link>
        ))}
      </div>
    )

  return (
    <section className={className}>
      <h2 className="text-2xl mb-2">Blog</h2>
      {blogPosts}
    </section>
  )
}

export default BlogPosts
