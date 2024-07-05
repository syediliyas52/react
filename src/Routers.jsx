import reactDOM  from 'reactDOM';
import {BrowserRouter,Route,Router,Link} from 'react-router-dom';
import Registration from './Router/Registration';
import Login from './Router/Login';
import Signup from './Router/Signup';
import Layout from './Router/Layout';
function Routers()
{
    return
    (
        <BrowserRouter>
        <Router>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Registration/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="*" element={<Signup/>}/>
        </Router>
        </BrowserRouter>
    );
}
export default Routers;