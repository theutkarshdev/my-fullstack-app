import { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/data`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React + FastAPI App</h1>
      <p>API Response: {data || "Loading..."}</p>
    </div>
  );
}

export default App;
