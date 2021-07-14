import { parseBlogPostIndex } from "./parseBlogPostIndex"

it("parses correctly formatted blog post index", () => {
	// Given
	const inputCsv = `id, title, slug, date
000,Beginning one year in,beginning-one-year-in,2021-6-14`

	const expected = [
		{
			id: "000",
			title: "Beginning one year in",
			slug: "beginning-one-year-in",
			date: new Date("2021-6-14")
		}
	]

	// When
	const actual = parseBlogPostIndex(inputCsv)

	// Then
	expect(actual).toEqual(expected)
})