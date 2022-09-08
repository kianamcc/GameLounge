import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PopularGames from "./components/popular-games/PopularGames";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PopularGames />
    </div>
  );
}

export default App;
