import React from "react"
import ReactMarkdown from "react-markdown"

import { usePost } from "../../hooks"

type Props = {
	className?: string,
	id: string
}

const Post = ({className, id }: Props) => {
	const { data, status } = usePost(id)

	return <div className={className}>
		{ status === "error" && <p>404, error fetching post</p> }
		{ status === "success" && data && <article>
			<ReactMarkdown className="markdown">
				{ data }
			</ReactMarkdown>
		</article> }
	</div>
}

export default Post