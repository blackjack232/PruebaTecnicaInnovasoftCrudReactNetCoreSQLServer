import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Principal from './pages/Principal'

function App() {
  return (
    <>
    <BrowserRouter>
     
     <Routes>
       
       <Route exact path="/" element={< Principal/>} />
       <Route exact path="/Consulta" element={< Principal/>} />
       <Route exact path="/CrearClientes" element={< Principal/>} />
       <Route exact path="/Estadistica" element={<Principal/>} />
       <Route exact path="/Otros" element={<Principal/>} />        
       
     </Routes>
  
   </BrowserRouter>
    </>
  );
}

export default App;
