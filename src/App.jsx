import { BrowserRouter, Routes, Route } from "react-router-dom";

import Question from "./components/Questions";
import AllSubject from "./components/AllSbuject";
import DCCN from "./components/DCCN";
import Fps from "./components/Fps";
import Ae from "./components/Ae";
import Om from "./components/Om";
import Wt from "./components/Wt";

function App() {
  return (
    <>
      {/* <Question /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/click" element={<AllSubject />} />
          <Route path="/dccn" element={<Fps />} />
          <Route path="/fps" element={<DCCN />} />
          <Route path="/ae" element={<Ae />} />
          <Route path="/om" element={<Om />} />
          <Route path="/wt" element={<Wt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
