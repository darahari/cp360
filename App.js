import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Login';
import Multiselect from './Multiselect';
import Searchbox from './Searchbox';

function App() {

  return (
    <div className="App">
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Login />} />
      <Route path="/login" element={  <Login />} />
      <Route path="home" element={ <Multiselect />} />
      <Route path="searchbox" element={<Searchbox />} />
    </Routes>
  </BrowserRouter>
    
      <br />
     
    </div>
  );
}

export default App;
