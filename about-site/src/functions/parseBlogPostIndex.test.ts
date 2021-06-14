import { parseBlogPostIndex } from "./parseBlogPostIndex"

it("parses correctly formatted blog post index", () => {
	// Given
	const inputCsv = `id, title, slug, date
000, Beginning one year in, beginning-one-year-in, 13-6-21`

	const expected = [
		{
			id: "000",
			title: "Beginning one year in",
			slug: "beginning-one-year-in",
			date: new Date("13-6-21")
		}
	]

	// When
	const actual = parseBlogPostIndex(inputCsv)

	// Then
	expect(actual).toBe(expected)
})