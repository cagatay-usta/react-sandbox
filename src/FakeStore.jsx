import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function FakeStore() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
        'https://fakestoreapi.com/products/', {mode: "cors"}
        );
        if (!response.ok) throw new Error(response.status)
      const data = await response.json();
      setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false)
      }
    }
    getProducts();
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  return (
    <div>
      {Object.values(products).map((product, index) => {
        return <img key={index} src={product.image} alt={product.title} style={{height: "200px", width: "200px"}}></img>

      })}
      <Link to="/">Home</Link>
    </div>
  )
}