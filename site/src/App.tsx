import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import View from "./components/View";

const App = () => {
  return (
    <Router>
      <div className="bg-yellow-50 min-h-screen overflow-x-hidden">
        <Header />
        <View />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
