import PLANTS from "../data";
//to show the plants list
export default function PlantList({ onAddToCart }) {
  return (
    <section className="plants">
      <ul>
        {PLANTS.map((singlePlant) => (
          <li key={singlePlant.id}>
            <span className="plant-emoji">{singlePlant.image}</span>
            <br />
            <h3>{singlePlant.name}</h3>
            <br />
            <button
              className="addToCartButton"
              onClick={() => onAddToCart(singlePlant)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
