import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Detail from "../pages/Detail";
import Results from "../pages/Results";
import NoPage from "../pages/NoPage";
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path = "/about" element={<About/>}/>
                <Route path = "/results" element={<Results/>}/>
                <Route path = "/result/:id" element={<Detail/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;