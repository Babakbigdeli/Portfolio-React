import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-400 text-white p-4 shadow-md fixed w-full top-0 left-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Babak Bigdeli</h1>
        <ul className="flex space-x-4">
          {[
            { name: "About", path: "/about" },
            { name: "Portfolio", path: "/portfolio" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
