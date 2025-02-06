import "../styles/dish.css";
export default function Dish({ name, price, ingredients, category }) {
  return (
    <div id="dish-card">
      <h1 id="dish-name">{name}</h1>
      <p id="dish-price">{price} </p>
      <p id="dish-ingredients">{ingredients} </p>
      <h2 id="dish-category">{category} </h2>
    </div>
  );
}
