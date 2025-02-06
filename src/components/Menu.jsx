import Dish from "./Dish.jsx";
import "../styles/menu.css";
export default function Menu({ menu }) {
  return (
    <>
      <h1 id="menu-title">Meny</h1>
      <ul id="menu">
        {menu.map((dish) => (
          <Dish
            key={dish.id}
            title={dish.name}
            price={dish.price}
            ingredients={dish.ingredients}
            category={dish.category}
          />
        ))}
      </ul>
    </>
  );
}
