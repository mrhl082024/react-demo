export default function MenuCard({ id, name, price, ingredients, category }) {
  return (
    <div>
      <h3>{name} </h3>
      <p>{category} </p>
      <p>{ingredients} </p>
      <h4>{price} </h4>
    </div>
  );
}
