import { Link, Outlet, useRoutes } from "react-router-dom";
import routes from '@/router'

function App() {
  const outlet = useRoutes(routes);
  return (
    <>
      {/* <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/user">User</Link> */}
      {/* <Outlet /> */}

      {outlet}
    </>
  );
}

export default App;
