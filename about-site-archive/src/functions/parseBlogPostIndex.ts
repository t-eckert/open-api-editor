import * as CSV from "csv-string"

import { BlogPost } from "../types/BlogPost"

export const parseBlogPostIndex = (blogPostIndex?: string): BlogPost[] | undefined => {
	if (!blogPostIndex)
		return undefined

	const parsedCsv = CSV.parse(blogPostIndex)

	return parsedCsv.slice(1).map((row: string[]) => ({ id: row[0], title: row[1], slug: row[2], date: new Date(row[3]) }))
}
