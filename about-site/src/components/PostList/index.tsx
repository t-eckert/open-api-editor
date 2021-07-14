import React from "react"

import { usePostList } from "../../hooks"
import PostPreview from "../PostPreview"

const PostList = () => {
	const { data, status } = usePostList()

	return (
		<div className="flex flex-col gap-4">
			{ status === "loading" 
				? <p>Loading posts</p> 
				: data?.map(post => post.display ? <PostPreview key={post.id} post={post} /> : "")
			}
		</div>
	)
}

export default PostList