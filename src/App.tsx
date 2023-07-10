// eslint-disable-next-line import/no-extraneous-dependencies
import Aos from "aos";
// eslint-disable-next-line import/no-extraneous-dependencies
import "aos/dist/aos.css";

import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./rooter/RouterApp";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1800, offset: 100 });
  }, []);
  const element = useRoutes(routes);

  return element;
}

export default App;
