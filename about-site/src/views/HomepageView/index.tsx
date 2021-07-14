import React from "react"

import Header from "../../components/Header"
import PostList from "../../components/PostList"

const HomepageView = () => {
	return <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 w-screen min-h-screen">
      <section className="pt-8 px-4 mx-auto max-w-3xl">
        <Header className="mb-4"/>
        <main className="flex flex-row justify-between gap-2">
          <section>
            <h3 className="text-md font-medium text-gray-600">Links</h3>
            <ul>
              <li className="font-medium text-gray-800 hover:text-gray-900 hover:underline"><a href="https://openapieditor.com" target="blank_" rel="noopener noreferrer">OpenAPI Editor</a></li>
              <li className="font-medium text-gray-800 hover:text-gray-900 hover:underline"><a href="https://github.com/t-eckert/open-api-editor" target="blank_" rel="noopener noreferrer">Source code</a></li>
            </ul>
          </section>
          <section className="w-text">
            <h3 className="text-md font-medium text-gray-600">Development log</h3>
            <PostList />
          </section>
        </main>
      </section>
    </div>
}

export default HomepageView