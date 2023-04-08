import React from "react";
import { Link } from "gatsby";

type Props = {
  children: React.ReactNode;
};
const Layout = (props: Props) => {
  return (
    <div>
      <nav className="border-b-2 border-black	flex justify-between  items-center	">
        <h1 className="text-3xl font-bold m-3">Peg Toolbox</h1>
        <div className="flex">
          <a
            href="https://peg.software/"
            className="bg-black m-3 p-2 pr-3 pl-3 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)]
"
          >
            Peg
          </a>
          <Link
            to="/"
            className="         m-3 p-2 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)]
"
          >
            Home
          </Link>
        </div>
      </nav>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
