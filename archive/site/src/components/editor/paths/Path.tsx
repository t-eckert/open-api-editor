import CloseIcon from "../../icons/CloseIcon"
import General from "./General"
import Operations from "./Operations"

const Path = () => {
  return (
    <section className="w-full bg-gray-50 rounded-xl shadow flex flex-col">
      <header className="px-4 py-1 flex items-center justify-between">
        <h2 className="font-medium text-gray-900">Path</h2>
        <CloseIcon className="h-4 w-4" />
      </header>
      <main className="flex flex-col">
        <General />
        <Operations />
      </main>
    </section>
  )
}

export default Path
