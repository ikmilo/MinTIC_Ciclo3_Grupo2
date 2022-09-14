import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import ContenedorProducto from './screens/HomePage/ContenedorProductos';

const App = () => {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <ContenedorProducto></ContenedorProducto>
    </div>
  );
}

export default App;
