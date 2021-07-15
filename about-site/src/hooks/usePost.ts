import { useQuery } from "react-query"
import { fetchPost } from "../actions"

const usePost = (id: string) => {
	return useQuery<string>(`post-${id}`, async () => await fetchPost(id))
}

export default usePost