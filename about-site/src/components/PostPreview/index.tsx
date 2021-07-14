import React from "react"

import { Post } from "../../types"

type Props = {
	post: Post
}

const PostPreview = ({post}: Props) => {
	return <div>
		<h3>{ post.title }</h3>
	</div>
}

export default PostPreview