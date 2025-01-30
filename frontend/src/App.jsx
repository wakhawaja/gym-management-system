import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import PageRoutes from "./routes/PageRoutes"; // Standardized import casing

const App = () => {
  return (
    <Layout>
      <PageRoutes />
    </Layout>
  );
};

export default App;
