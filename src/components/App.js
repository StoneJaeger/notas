import Header from "./sections/Header"
import Home from "./pages/home";
import Estudiante from "./pages/estudiante";

import "../styles/styles.scss"
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

const App = () => (
    <><Header />
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route  path= '/estudiante' element={<Estudiante />} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  )

export default App;
