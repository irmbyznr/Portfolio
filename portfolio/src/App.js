import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/HomePage/header";
import { Media } from "./components/Media/media";
import Pages from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
      <Media />
    </BrowserRouter>
  );
}

export default App;
