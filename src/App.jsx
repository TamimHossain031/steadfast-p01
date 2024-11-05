import { useEffect, useState } from "react";

import Preloader from "./components/Helpers/Preloader";
import Layout from "./pages/Layout";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <>{loading ? <Preloader /> : <Layout />}</>;
}

export default App;
