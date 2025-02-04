import MenuData from "../data/Menu";
import MenuCard from "../components/MenuCard";
function App() {
  return (
    <>
      {MenuData.map((props) => (
        <MenuCard {...props} />
      ))}
    </>
  );
}

export default App;
