import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { name: "laptop", price: "$49", brand: "Apple" },
    { name: "mobile", price: "$29", brand: "Samsung" },
    { name: "watch", price: "$19", brand: "Xiaomi" },
  ];

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>It's Me...</h1>
        <Counter></Counter>
        {users.map((user) => (
          <Users user={user} key={user.id}></Users>
        ))}
        {products.map((pd) => (
          <Products product={pd}></Products>
        ))}
      </header>
    </div>
  );
}

function Counter() {
  const counterCard = {
    backgroundColor: "blue",
    margin: "5px",
    padding: "10px",
    borderRadius: "5px",
  };

  const [count, setCount] = useState(5);

  return (
    <div style={counterCard}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <UsersCounter count={count}></UsersCounter>
      <UsersCounter count={count + 3}></UsersCounter>
      <UsersCounter count={count + 5}></UsersCounter>
    </div>
  );
}

function UsersCounter(props) {
  return <h4>Number or users added:{props.count} </h4>;
}

function Users(props) {
  const userCard = {
    backgroundColor: "red",
    margin: "5px",
    padding: "10px",
    borderRadius: "5px",
  };
  const { title } = props.user;
  return (
    <div style={userCard}>
      <h3>Title: {title}</h3>
    </div>
  );
}

function Products(props) {
  const cardStyle = {
    backgroundColor: "green",
    margin: "5px",
    padding: "10px",
    borderRadius: "5px",
  };
  const { name, price, brand } = props.product;
  return (
    <div style={cardStyle}>
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <h4>Brand: {brand}</h4>
    </div>
  );
}

export default App;
