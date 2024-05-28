import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PlayGround from "./src/layout/Playground";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/playground",
    alias: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/playground",
        element: <PlayGround />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
