import './App.scss';

//  components
import Navbar from "./Components/Navbar/Navbar";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
