import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products") // ou a URL externa
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}
