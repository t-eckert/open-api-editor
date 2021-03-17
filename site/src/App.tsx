import Header from "./components/Header";
import Footer from "./components/Footer";
import View from "./components/View";

const App = () => {
  return (
    <div>
      <div className="bg-yellow-50 min-h-screen overflow-x-hidden">
        <Header documentName="" showCommandPalette={true} user="" />
        <View />
      </div>
      <Footer />
    </div>
  );
};

export default App;
