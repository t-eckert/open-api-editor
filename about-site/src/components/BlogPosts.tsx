import { useQuery } from "react-query"

import { parseBlogPostIndex } from "../functions/parseBlogPostIndex"
import { BlogPost } from "../types"

const BlogPosts = () => {
  const { status, data } = useQuery("blog-post-index", () =>
    fetch(
      "https://raw.githubusercontent.com/t-eckert/open-api-editor/dev/about/blog-posts/index.csv"
    ).then((res) => res.text())
  )

  if (status === "loading") return <section>Loading blog posts...</section>

  if (status === "error") return <section>Error loading blog posts...</section>

  const blogPostIndex = parseBlogPostIndex(data)

  return (
    <section>
      {blogPostIndex?.map((blogPost: BlogPost) => (
        <div>{blogPost.title}</div>
      ))}
    </section>
  )
}

export default BlogPosts
