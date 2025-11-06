import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "@/components/layout";
import Authentication from "./pages/authentication";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Authentication />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
