import './App.css';
import Home from './components/Home'
import Template from './components/CV Templates/Template'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='template' element={<Template/>}/>

    </Routes>
    </BrowserRouter>

    

    
    </>
  );
}

export default App;
