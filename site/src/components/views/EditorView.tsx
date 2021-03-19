import Editor from "../editor/Editor";
import MainLeading from "../layout/MainLeading";
import MainCenter from "../layout/MainCenter";
import MainFollowing from "../layout/MainFollowing";
import Navigation from "../editor/Navigation";

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
  );
};

export default EditorView;
