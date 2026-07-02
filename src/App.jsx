import { useState } from "react";
import PlantList from "./Plants/PlantList";
import Cart from "./Cart/Cart";
export default function App() {
  const [cart, setCart] = useState([]);
  //Function to add items
  const addPlantToCart = (plant) => {
    const plantItem = cart.find((item) => item.id === plant.id);

    if (plantItem) {
      const mappedCart = cart.map((plantItem) => {
        return plantItem.id === plant.id
          ? { ...plantItem, quantity: plantItem.quantity + 1 }
          : plantItem;
      });
      setCart(mappedCart);
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };
  //function to remove a item
  const reduceItemQuantity = (plant) => {
    const mappedCart = cart.map((plantItem) => {
      return plantItem.id === plant.id
        ? { ...plantItem, quantity: plantItem.quantity - 1 }
        : plantItem;
    });
    const filteredCart = mappedCart.filter((item) => {
      return item.quantity > 0;
    });
    setCart(filteredCart);
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantList onAddToCart={addPlantToCart} />

        <Cart
          cartItems={cart}
          onIncrement={addPlantToCart}
          onDecrement={reduceItemQuantity}
        />
      </main>
    </>
  );
}
