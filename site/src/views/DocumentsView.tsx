import MainLeading from "../components/layout/MainLeading"
import MainCenter from "../components/layout/MainCenter"
import MainFollowing from "../components/layout/MainFollowing"

import Documents from "../components/documents/Documents"

const documents = [
  { title: "One document", version: "1.0.2" },
  { title: "Two document", version: "3.0.2" },
]

const DocumentsView = () => {
  return (
    <main className="flex flex-col sm:flex-row w-screen">
      <MainLeading />
      <MainCenter>
        <Documents documents={documents} />
      </MainCenter>
      <MainFollowing />
    </main>
  )
}

export default DocumentsView
