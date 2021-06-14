import { useQuery } from "react-query"

const useBlogPostIndex = () => {
  const response = useQuery("blog-post-index", async () => {
    await fetch(
      "https://github.com/t-eckert/open-api-editor/blob/dev/about/blog-posts/index.csv"
    )
  })
}

export default useBlogPostIndex
