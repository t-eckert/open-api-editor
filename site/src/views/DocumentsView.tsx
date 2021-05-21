import { useUserStore, useDocumentList } from "../hooks"

import MainLeading from "../components/layout/MainLeading"
import MainCenter from "../components/layout/MainCenter"
import MainFollowing from "../components/layout/MainFollowing"
import Documents from "../components/documents/Documents"
import FeedbackToken from "../components/tokens/FeedbackToken"

const DocumentsView = () => {
  const userStore = useUserStore()
  const token = userStore.jwt || ""

  const { documents } = useDocumentList(token)

  return (
    <main className="flex flex-col sm:flex-row w-screen">
      <MainLeading />
      <MainCenter>
        {/* @ts-ignore */}
        <Documents documents={documents} />
      </MainCenter>
      <MainFollowing />
      <FeedbackToken className="fixed bottom-4 left-4" />
    </main>
  )
}

export default DocumentsView
