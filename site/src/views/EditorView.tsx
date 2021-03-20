import Editor from "../components/editor/Editor"
import MainLeading from "../components/layout/MainLeading"
import MainCenter from "../components/layout/MainCenter"
import MainFollowing from "../components/layout/MainFollowing"
import Navigation from "../components/editor/Navigation"

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
    </main>
  )
}

export default EditorView
