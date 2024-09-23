import './App.css'
import './index.css'
import{
    BrowserRouter,
    Route,
    Routes,

} from"react-router-dom"
import Login from './Login';
import Forgotpass from './Forgotpass';
import Workflow from './Workflow';
import Home from './Home';

function App() {

   return(
    <div className='Apps'>
    <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Forgotpass" element={<Forgotpass/>}/>
            <Route path="/Workflow" element={<Workflow/>}/>
        </Routes>
    </BrowserRouter>


</div>
   )
}
export default App;