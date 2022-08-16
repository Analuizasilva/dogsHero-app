import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./Components/Body/Index";
import Header from "./Components/Header/Index";
import Footer from "./Components/Footer/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
