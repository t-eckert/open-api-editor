import React from "react"
import { Link } from "react-router-dom"

import { Post } from "../../types"

type Props = {
	post: Post
}

const PostPreview = ({post}: Props) => {
	const published = new Date(post.published)

	return <div>
		<h4 className="font-medium text-xl text-gray-800 hover:text-gray-900 hover:underline"><Link to={"/post/" + post.id}>{ post.title }</Link></h4>
		<div className="text-sm text-gray-600 flex flex-row gap-2">
			<p>{published.toLocaleDateString()}</p>
			<p>{post.readTime} minute read</p>
		</div>
		<p className="leading-tight text-gray-900">{ post.preview }</p>
	</div>
}

export default PostPreview