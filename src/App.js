import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
