import React from "react"

type Props = {
	documentId: string
}

const PostView = ({ documentId }: Props) => {
	return (
		<div>
			<h1>{documentId}</h1>
		</div>
	)
}

export default PostView