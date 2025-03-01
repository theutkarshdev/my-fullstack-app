import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/data`)
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">React + FastAPI App</h1>
      <p className="mt-3 font-semibold">API Response: {data || "No data found..!"}</p>
    </div>
  );
};

export default Home;
