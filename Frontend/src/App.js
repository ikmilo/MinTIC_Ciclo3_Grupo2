import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import ContenedorProductos from './screens/HomePage/ContenedorProductos'
import LoginPage from "./screens/Login/LoginPage";
import RegisterPage from "./screens/Login/RegisterPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Registrer" element={<RegisterPage/>} />
        </Routes>
      </BrowserRouter>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <ContenedorProductos />
    </div>
  );
}

export default App;
