import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Shop from "./components/Shop"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from "./components/Explore"

function App() {
  return (
    <Router>
    <div className="App">
            
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Banner />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
      
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
