import WeatherCard from "./components/WeatherCard";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <WeatherCard />
    </div>
  );
}

export default App;
