import menu from "./Menu.jsx";
import MenuCard from "./MenuCard.jsx";

function App() {
  return (
    <div>
      {menu.map((props) => (
        <MenuCard {...props} />
      ))}
    </div>
  );
}

export default App;
