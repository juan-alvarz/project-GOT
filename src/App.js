import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HouseDetail from "./components/HouseDetail/HouseDetail";
import Houses from "./components/Houses/Houses";
import CreateHouse from "./components/CreateHouse/CreateHouse";
import About from "./components/About/About.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Houses} />
      <Route path="/houses/:houseId" component={HouseDetail} />
      <Route path="/house/create" component={CreateHouse} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
