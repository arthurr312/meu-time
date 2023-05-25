import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { GlobalStyles } from "./styles/GlobalStyles";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Leagues from "./pages/leagues";
import Seasons from "./pages/seasons";
import Team from "./pages/team";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        {window.location.pathname !== "/login" && <Header />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leagues/:country" element={<Leagues />} />
          <Route path="/leagues/:country/:leagueId/:season" element={<Seasons />} />
          <Route path="/leagues/:country/flamengo/:season" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
