import { observer } from "mobx-react-lite"

import Editor from "../components/editor/Editor"
import MainLeading from "../components/layout/MainLeading"
import MainCenter from "../components/layout/MainCenter"
import MainFollowing from "../components/layout/MainFollowing"
import Navigation from "../components/editor/Navigation"
import FeedbackToken from "../components/tokens/FeedbackToken"
import { useDocument, useDocumentStore, useUserStore } from "../hooks"

type Props = {
  match: { params: { id: string } }
}

const EditorView = observer((props: Props) => {
  const documentId = props.match.params.id

  const userStore = useUserStore()

  const token = userStore.jwt || ""

  const { openApiDocument } = useDocument(token, documentId)

  const documentStore = useDocumentStore(openApiDocument)

  return (
    <main className="flex flex-col sm:flex-row w-screen">
      <MainLeading>
        <div className="mt-8 pl-2">
          <Navigation />
        </div>
      </MainLeading>
      <MainCenter>
        <pre>
          <code>{JSON.stringify(documentStore.openApiDocument)}</code>
        </pre>
        <Editor />
      </MainCenter>
      <MainFollowing />
      <FeedbackToken className="fixed left-4 bottom-4" />
    </main>
  )
})

export default EditorView
