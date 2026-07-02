export default function Cart({ cartItems, onIncrement, onDecrement }) {
  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((singleCartItem) => (
          <li key={singleCartItem.id}>
            <div className="cartItemAligner">
              <span className="cart-emoji">{singleCartItem.image}</span>
              <h3 className="singleCartItem">{singleCartItem.name}</h3>
            </div>
            <div className="cartItemAlignerForQuantityAndButtons">
              <button
                className="decrementButton"
                onClick={() => onDecrement(singleCartItem)}
              >
                -
              </button>
              <p> Qty:{singleCartItem.quantity}</p>
              <button
                className="incrementButton"
                onClick={() => onIncrement(singleCartItem)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
