import React from "react";
import { Link, NavLink, useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Mylogo from "./assets/react.svg";

const routeConfig = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

function App() {
  const routeResult = useRoutes(routeConfig);
  const location = useLocation();
  console.log(location);
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];

  return (
    <div>
      <header className="fixed top-0 w-full border-b border-slate-200 py-3">
        <nav className="w-full max-w-screen-lg px-3 mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={Mylogo} alt="logo" />
          </Link>
          <ul className="flex gap-2">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <NavLink className={location.pathname === item.path && "text-red-500"} to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="w-full max-w-screen-lg px-3 mx-auto">
        <div className="mt-14 min-h-[calc(100vh_-_3.5rem)] flex items-center justify-center">
          {routeResult}
        </div>
      </div>
    </div>
  );
}

export default App;
