import { useState } from "react";

function ShoppingListForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({ product: "", qty: 0 });

  const handleOnChange = (e) => {
    setFormData((currValue) => {
      return { ...currValue, [e.target.name]: e.target.value };
    });
  };

  // const handleOnClick = (e) => {
  //   e.preventDefault();

  //   console.log(formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onFormSubmit(formData);
    setFormData({ product: "", qty: 0 });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>
          Product Name {formData.product} - Product Qty {formData.qty}
        </h1>
        <input
          type="text"
          placeholder="product name"
          id="product"
          name="product"
          onChange={handleOnChange}
          value={formData.product}
        />

        <input
          type="number"
          placeholder="quantity"
          id="qty"
          name="qty"
          onChange={handleOnChange}
          value={formData.qty}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default ShoppingListForm;
