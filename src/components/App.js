import Header from "./sections/Header"
import Home from "./pages/home";
import Estudiantes from "./pages/estudiantes";
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
          <Route  path= '/estudiante' element={<Estudiantes />} />
          <Route path='/nosotros' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )

export default App;
