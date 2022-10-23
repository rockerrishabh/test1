import { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment>
      <header>
        <h1 className="text-blue-800 ">This is Navbar</h1>
      </header>
      <main>{children}</main>
      <footer>This is footer</footer>
    </Fragment>
  );
}

export default Layout;
