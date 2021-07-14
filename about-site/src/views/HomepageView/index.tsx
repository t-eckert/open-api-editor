import React from "react"

import PostList from "../../components/PostList"

const HomepageView = () => {
	return <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 w-screen min-h-screen">
      <section className="mx-auto max-w-4xl">
        <header className="">
          <h2 className="font-medium text-xl text-yellow-800">
						About
					</h2>
          <h1 className="font-medium text-6xl text-gray-900">
            Open API Editor
          </h1>
					<p>

					</p>
        </header>
        <main className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
					<PostList />
        </main>
      </section>
    </div>
}

export default HomepageView