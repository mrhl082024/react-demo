import Dish from "./Dish.jsx";
export default function Menu({ menu }) {
  return (
    <>
      <h1>Meny</h1>
      <ul>
        {menu.map((dish) => (
          <Dish
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
