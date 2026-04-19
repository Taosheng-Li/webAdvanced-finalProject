import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrdersListPage.css";

interface Order {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  item: string;
  quantity: number;
  start_date: string;
  end_date: string;
  message: string;
  created_at: string;
}

function OrdersListPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("/api/orders");
        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching orders");
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <main className="orders-list-page">
        <div className="container">
          <h2>Loading orders...</h2>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="orders-list-page">
        <div className="container">
          <h2>Error</h2>
          <p className="error-msg">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="orders-list-page">
      <div className="container">
        <h1>All Rental Orders</h1>
        <p className="subtitle">Overview of all submitted rental requests</p>
        
        {orders.length === 0 ? (
          <div className="no-orders">
            <p>No orders have been submitted yet.</p>
            <Link to="/order" className="btn-primary btn-inverted">Create an Order</Link>
          </div>
        ) : (
          <div className="orders-table-wrapper">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Contact</th>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Rental Period</th>
                  <th>Booked On</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.full_name}</td>
                    <td>
                      <div>{order.email}</div>
                      <div className="small-text">{order.phone}</div>
                    </td>
                    <td>{order.item}</td>
                    <td>{order.quantity}</td>
                    <td>
                      {new Date(order.start_date).toLocaleDateString()} - <br/>
                      {new Date(order.end_date).toLocaleDateString()}
                    </td>
                    <td>{new Date(order.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

export default OrdersListPage;
