import React from "react"

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PostPreview from '.'

it("displays a post preview from post data", () => {
	// Given
	const id = "1"
	const title = "Post Title"

	const post = {
		id,
		title,
	}

	// When
	const { container } = render(<PostPreview post={ post } />)

	// Then
	expect(container.querySelector("h3")).toHaveTextContent("Post Title")
})

export { }