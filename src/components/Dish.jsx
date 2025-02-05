export default function Dish(props) {
  return (
    <div>
      <h1>{props.name} </h1>
      <p>{props.price} </p>
      <p>{props.ingredients} </p>
      <h2>{props.category} </h2>
    </div>
  );
}
