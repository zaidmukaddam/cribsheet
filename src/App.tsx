import "./styles.css";
import { Http } from "./sheets/http";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Javascript } from "./sheets/javascript";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Http />} />
            <Route path="javascript" element={<Javascript />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
