import { HashRouter as Router, Routes, Route } from "react-router-dom";

import DCCN from "./components/DCCN";
import Fps from "./components/Fps";
import Ae from "./components/Ae";
import Om from "./components/Om";
import Wt from "./components/Wt";
import Home from "./components/Home";
import AllSubject from "./components/AllSbuject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/click" element={<AllSubject />} />
        <Route path="/dccn" element={<DCCN />} />
        <Route path="/fps" element={<Fps />} />
        <Route path="/ae" element={<Ae />} />
        <Route path="/om" element={<Om />} />
        <Route path="/wt" element={<Wt />} />
      </Routes>
    </Router>
  );
}

export default App;
