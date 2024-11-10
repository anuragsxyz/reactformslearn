import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

function ShoppingListItem() {
  const [items, setItems] = useState([
    { id: uuid(), product: "banana", qty: 50 },
    { id: uuid(), product: "asd", qty: 5 },
    { id: uuid(), product: "banaasdna", qty: 10 },
  ]);

  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, item, id: uuid() }];
    });
  };

  return (
    <>
      <ul>
        {items.map((e) => (
          <li key={e.id}>{e.product}</li>
        ))}
      </ul>

      <ShoppingListForm onFormSubmit={addItem} />
    </>
  );
}

export default ShoppingListItem;
