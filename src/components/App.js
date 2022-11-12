import Header from "./sections/Header"
import Home from "./pages/home";
import Estudiante from "./pages/estudiante";
import AboutUs from "./pages/aboutus";

import "../styles/styles.scss"
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

const App = () => (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route  path= '/estudiante' element={<Estudiante />} />
            <Route path='/nosotros' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
    </>
  )

export default App;
