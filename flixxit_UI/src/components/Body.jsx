import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";
import Footer from "./Footer";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  );
}

export default Body;
