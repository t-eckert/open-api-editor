import Editor from "../components/editor/Editor"
import MainLeading from "../components/layout/MainLeading"
import MainCenter from "../components/layout/MainCenter"
import MainFollowing from "../components/layout/MainFollowing"
import Navigation from "../components/editor/Navigation"
import FeedbackToken from "../components/tokens/FeedbackToken"

const EditorView = () => {
  return (
    <main className="flex flex-col sm:flex-row w-screen">
      <MainLeading>
        <div className="mt-8 pl-2">
          <Navigation />
        </div>
      </MainLeading>
      <MainCenter>
        <Editor></Editor>
      </MainCenter>
      <MainFollowing />
      <FeedbackToken className="fixed left-4 bottom-4" />
    </main>
  )
}

export default EditorView
