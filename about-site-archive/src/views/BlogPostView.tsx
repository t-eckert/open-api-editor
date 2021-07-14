import { useDocument } from "../hooks/useDocument"

type Props = {
  documentId: string
}

/** `DocumentView` component
 *
 * Grabs a markdown document using the `useDocument` hook and displays it, parsing the markdown to HTML
 */
const BlogPostView = ({ documentId }: Props) => {
  return <div>Document</div>
}

export default BlogPostView
