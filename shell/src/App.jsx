import { lazy, Suspense, useState } from "react";

const Products = lazy(() => import("products/Products"));
const Cart = lazy(() => import("cart/Cart"));
const Orders = lazy(() => import("orders/Orders"));

function App() {
  const [page, setPage] = useState("products");

  const pages = {
    products: Products,
    cart: Cart,
    orders: Orders,
  };

  const ActivePage = pages[page];

  return (
    <div>
      <header>
        <h1>Microfrontend Store</h1>
      </header>

      <nav>
        <button onClick={() => setPage("products")}>
          Products
        </button>

        <button onClick={() => setPage("cart")}>
          Cart
        </button>

        <button onClick={() => setPage("orders")}>
          Orders
        </button>
      </nav>

      <main>
        <Suspense fallback={<p>Loading application...</p>}>
          <ActivePage />
        </Suspense>
      </main>
    </div>
  );
}

export default App;