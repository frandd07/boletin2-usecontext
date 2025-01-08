import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); 

  const addItem = (product) => {
    setItems((prevItems) => [...prevItems, product]);
  };

  const removeItem = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default function Ejercicio4() {
  const { items, addItem, removeItem } = useCart();

  const products = [
    { id: 1, nombre: 'Balón', precio: 20 },
    { id: 2, nombre: 'Raqueta', precio: 80},
    { id: 3, nombre: 'Camiseta', precio: 35 }
  ];

  return (
    <div>
      <h1>Ejercicio 4: Carrito de Compras</h1>

      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nombre} - {product.precio}€ 
            <button onClick={() => addItem(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>

      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.nombre} - {item.precio}€
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
