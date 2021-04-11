import { useUserDocuments, useUserStore } from "../hooks"

import MainLeading from "../components/layout/MainLeading"
import MainCenter from "../components/layout/MainCenter"
import MainFollowing from "../components/layout/MainFollowing"
import Documents from "../components/documents/Documents"

const DocumentsView = () => {
  const userStore = useUserStore()
  const documents = useUserDocuments()

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
