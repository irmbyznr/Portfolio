import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./pages";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
