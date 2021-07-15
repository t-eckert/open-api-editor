import { formatPostUrl } from "../functions"

const fetchPost = async (id: string): Promise<string> => {
	const response = await fetch(formatPostUrl(id))

	if (!response.ok) {
		throw new Error(`Failed to fetch post with id ${id}`)
	}

	return response.text()
}

export default fetchPost