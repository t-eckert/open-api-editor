import { useQuery } from "react-query"

import { BLOG_POST_INDEX_URL } from "../config";
import { parseBlogPostIndex } from "../functions/parseBlogPostIndex";

export const useBlogPostIndex = () => {
	return useQuery(
		"blog-post-index",
		async () => {
			const response = await fetch(BLOG_POST_INDEX_URL + "index.csv")

			if (!response.ok)
				throw new Error("Could not fetch index of blog posts.")

			const responseBody = await response.text()

			return parseBlogPostIndex(responseBody)
		},
		{
			cacheTime: 20 * 60 * 1000 // 20 minutes
		}
	)
}