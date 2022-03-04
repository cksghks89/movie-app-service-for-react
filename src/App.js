import {
    BrowserRouter as Router,    //HashRouter와 BrowserRouter 두 종류가 있음
    Routes,
    Route,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function App(){
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/movie/:id" element={<Detail/>}></Route>
        </Routes>
    </Router>
)}

export default App;
