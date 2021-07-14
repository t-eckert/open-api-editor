import React from "react"

import { Post } from "../../types"
import { usePostList } from "../../hooks"

const PostList = () => {
	const { data, status } = usePostList()

	return (
		<div>
			<h1>Post List</h1>
			<div>{ status }</div>
			<div>{ JSON.stringify(data) }</div>
		</div>
	)
}

export default PostList