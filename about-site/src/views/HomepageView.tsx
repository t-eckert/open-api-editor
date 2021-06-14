import Links from "../components/Links"
import BlogPosts from "../components/BlogPosts"
import Documents from "../components/Documents"

const HomepageView = () => {
  return (
    <div className="bg-yellow-100 w-screen h-screen">
      <div className="mx-auto container">
        <header className="pt-60 mb-20">
          <h1 className="font-medium text-xl text-yellow-800">About</h1>
          <h2 className="font-medium text-6xl text-gray-900">
            Open API Editor
          </h2>
        </header>
        <main className="w-full flex flex-col sm:flex-row gap-4 sm:justify-between">
          <Links />
          <BlogPosts />
          <Documents />
        </main>
      </div>
    </div>
  )
}

export default HomepageView
