import NotFoundPage from "~/pages/NoFound";
import Hero from "~/pages/Home";
import Home from "~/pages/BlogList";
import Blog from "~/pages/Blog";
import Generic from "~/Layouts/Generic";

const routes = [
  {
    path: "/",
    element: <Generic />,
    children: [
      {
        path: "home",
        element: <Hero />,
      },
      {
        path: "blogs",
        element: <Home />,
      },
      {
        path: "blogs/:id",
        element: <Blog />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
