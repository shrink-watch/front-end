import logo from "./logo.svg";
import "./App.css";
import Detail from "./pages/DetailedPage";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>

  );
  
}

export default App;
