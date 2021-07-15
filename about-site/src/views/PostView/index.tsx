import React from "react"
import { Link } from "react-router-dom"

import Post from "../../components/Post"

type Props = {
	documentId: string
}

const PostView = () => {
	return <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 w-screen min-h-screen">
		<section className="pt-8 px-4 mx-auto w-text">
			<Link className="mb-2 flex flex-row items-center group text-gray-800 hover:text-gray-900" to="/">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition transform group-hover:rotate-12" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
				</svg>
				<span className="font-medium">Home</span>
			</Link>
			<Post className="mx-auto" id={"000"}/>
		</section>
	</div>
}

export default PostView