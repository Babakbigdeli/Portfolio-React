import { NavLink } from "react-router-dom";

function Navbar() {
  return (
      <nav className="bg-[#333337] text-white p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Babak Bigdeli</h1>
          <ul className="flex space-x-8">
            {[
              { name: "About", path: "/about" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-white font-bold" : "hover:font-bold"
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
