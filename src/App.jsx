import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dangnhap from "./Auth/Dangnhap";
import Dangky from "./Auth/Dangky";
import Quenmatkhau from "./Auth/Quenmatkhau";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/dangnhap"
                element={<Dangnhap />}
            />
            <Route
                path="/dangky"
                element={<Dangky />}
            />
            <Route
                path="/quenmatkhau"
                element={<Quenmatkhau />}
            />
        </Routes>
    );
}

export default App;
