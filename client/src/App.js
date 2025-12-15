import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./Components/Contacts";
import Free from "./Components/Free";
import HomePage from "./Components/HomePage/HomePage";
import Tarif from "./Components/Tarif";
import Treneri from "./Components/Treneri";
import Uslugi from "./Components/Uslugi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/uslugi" element={<Uslugi></Uslugi>}></Route>
          <Route path="/treneri" element={<Treneri></Treneri>}></Route>
          <Route path="/tarif" element={<Tarif></Tarif>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/free" element={<Free></Free>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
