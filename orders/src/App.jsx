const orders = [
  {
    id: 101,
    product: "Laptop",
    status: "Delivered",
    total: 55000,
  },
  {
    id: 102,
    product: "Headphones",
    status: "Processing",
    total: 2500,
  },
];

function Orders() {
  return (
    <section>
      <h2>Order History</h2>

      {orders.map((order) => (
        <article key={order.id}>
          <h3>Order #{order.id}</h3>

          <p>Product: {order.product}</p>

          <p>Status: {order.status}</p>

          <p>Total: ₹{order.total.toLocaleString("en-IN")}</p>
        </article>
      ))}
    </section>
  );
}

export default Orders;