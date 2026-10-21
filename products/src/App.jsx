import { useEffect } from "react"

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
  },
  {
    id: 2,
    name: "Headphones",
    price: 2500,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
  },
];
useEffect(() => {
  localStorage.setItem("products", JSON.stringify(products))
}, [])
function Products() {
  return (
    <section>
      <h2>Products</h2>

      {products.map((product) => (
        <article key={product.id}>
          <h3>{product.name}</h3>

          <p>
            Price: ₹{product.price.toLocaleString("en-IN")}
          </p>

          <button
            onClick={() => {
              alert(`${product.name} selected`);
            }}
          >
            Select Product
          </button>
        </article>
      ))}
    </section>
  );
}

export default Products;