import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { GlobalStyles } from "./styles/GlobalStyles";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        {window.location.pathname === "/login" ? null : <Header />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
