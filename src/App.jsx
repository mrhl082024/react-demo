import menu from "./Menu.jsx";
import MenuCard from "./MenuCard.jsx";

function App() {
  return (
    <>
      {menu.map((props) => (
        <MenuCard {...props} />
      ))}
    </>
  );
}

export default App;
