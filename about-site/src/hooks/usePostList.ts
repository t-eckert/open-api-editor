import { useQuery } from "react-query"

import { Post } from "../types"
import { fetchPostList } from "../actions"

const usePostList = () => {
	return useQuery<Post[]>("postList", fetchPostList)
}

export default usePostList