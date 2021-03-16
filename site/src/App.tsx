import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Blobs from "./components/Blobs";

const documents = [
  { title: "One document", version: "1.0.2" },
  { title: "Two document", version: "3.0.2" },
];

const App = () => {
  const showBlobs = false;

  return (
    <div>
      <div className="bg-yellow-50 min-h-screen">
        <Header documentName="" showCommandPalette={false} user="" />
        <Main documents={documents} />
        {showBlobs ? <Blobs /> : ""}
      </div>
      <Footer />
    </div>
  );
};

export default App;
