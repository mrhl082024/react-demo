import MenuData from "./data/MenuData.js";
import Menu from "./components/Menu.jsx";
import "./styles/App.css"

function App() {
  return <Menu menu={MenuData} />;
}

export default App;
