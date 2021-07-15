import React from "react"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PostPreview from '.'

it("displays a post preview from post data", () => {
	// Given
	const id = "1"
	const title = "Post Title"
	const published = "2021-07-15"
	const readTime = 1
	const display = true
	const preview = "Anim consequat sunt do nostrud ad commodo enim amet adipisicing consequat et eiusmod dolore. Cillum non voluptate nisi magna est do cillum irure Lorem tempor dolore. Qui amet cupidatat officia consequat excepteur enim pariatur ex aliqua Lorem commodo in et fugiat. Labore ad cillum fugiat et mollit amet aute consectetur occaecat elit ex. Culpa nulla cillum esse non cupidatat aute quis ut. Culpa enim laborum qui culpa excepteur aliqua."

	const post = {
		id,
		title,
		published,
		readTime,
		display,
		preview
	}
	
	const history = createMemoryHistory()

	// When
	const { container } = render(<Router history={history}><PostPreview post={ post } /></Router>)

	// Then
	expect(container.querySelector("h4")).toHaveTextContent("Post Title")
})

export { }