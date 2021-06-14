import * as CSV from "csv-string"

import { BlogPostIndex } from "../types"

export const parseBlogPostIndex = (blogPostIndex: string): BlogPostIndex | undefined => {
	const parsedCsv = CSV.parse(blogPostIndex)


	return undefined
}
