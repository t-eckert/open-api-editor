import React from "react"

type Props = {
	className?: string,
}

const Header = ({className}: Props) => {
	return <header className={className}>
		<h2 className="font-medium text-xl text-yellow-800 -mb-2">
			About
		</h2>
		<h1 className="mb-3 font-medium text-6xl text-gray-900">
			Open API Editor
		</h1>
		<p className="text-gray-800">
			Welcome to the about site for OpenAPI Editor. Here, you can follow along as I develop the application.
		</p>
	</header>
}

export default Header