import { useQuery } from "react-query"

const usePostList = () => {

	const { data: postList } = useQuery("postList", async () => {
		const result = await fetch("")
		return result.json()
	})

	return postList
}

export default usePostList