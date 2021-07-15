import { Post } from "../types"
import { POST_LIST_URL } from "../constants"

const fetchPostList = async (): Promise<Post[]> => {
	const response = await fetch(POST_LIST_URL)

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`)
	}

	const content = await response.json()
	return content
}

export default fetchPostList