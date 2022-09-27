import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import ContenedorProductos from './screens/HomePage/ContenedorProductos'
import LoginPage from "./screens/Login/LoginPage";
import RegisterPage from "./screens/Login/RegisterPage";
import AccountPresenter from './screens/Perfil/AccountPresenter'
import PayPagePresenter from './screens/PayPage/PayPagePresenter'
import Provider from './contexts/LoginContext'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContenedorProductos />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/Account" element={<AccountPresenter />} />
      <Route path="/Cart" element={<PayPagePresenter />} />
    </Routes>
  )
}


const App = () => {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <PrimarySearchAppBar />
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App

