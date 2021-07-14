import Links from "../components/Links"
import BlogPosts from "../components/BlogPosts"

const HomepageView = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 w-screen min-h-screen">
      <div className="mx-auto container">
        <header className="pt-20 sm:pt-52 mb-20">
          <h1 className="font-medium text-xl text-yellow-800">About</h1>
          <h2 className="font-medium text-6xl text-gray-900">
            Open API Editor
          </h2>
        </header>
        <main className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <Links className="col-span-1" />
          <BlogPosts className="col-span-1 md:col-span-2 lg:col-span-3" />
        </main>
      </div>
    </div>
  )
}

export default HomepageView
